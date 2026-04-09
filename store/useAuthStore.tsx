"use client";

import { create } from "zustand";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User as firebaseUser,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "@/firebaseConfig/firebase";
import { useCartStore } from "@/store/useCartStore";
import { getIdToken } from "firebase/auth";

interface AppUser {
  uid: string;
  fullName: string;
  email: string;
  phone?: string;
  photoURL?: string | null;
  createdAt: any;
}

interface AuthState {
  user: AppUser | null;
  loading: boolean;
  loginWithGoogle: () => Promise<AppUser | null>;
  logout: () => Promise<void>;
  initAuth: () => (() => void) | void;
  updateProfile: (data: {
    fullName: string;
    email: string;
    phone: string;
  }) => Promise<void>;
}

let hasInitialized = false;

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,

  loginWithGoogle: async (): Promise<AppUser | null> => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      const token = await firebaseUser.getIdToken();
      document.cookie = `token=${token}; path=/;`;

      const userRef = doc(db, "users", firebaseUser.uid);
      const userSnap = await getDoc(userRef);

      let appUser: AppUser;

      if (userSnap.exists()) {
        appUser = userSnap.data() as AppUser;
      } else {
        const newUser = {
          uid: firebaseUser.uid,
          fullName: firebaseUser.displayName || firebaseUser.email || "User",
          email: firebaseUser.email || "",
          phone: "",
          photoURL: firebaseUser.photoURL,
          createdAt: serverTimestamp(),
        };
        await setDoc(userRef, newUser);

        // ✅ Re-read after write so createdAt is a real Timestamp, not a sentinel
        const freshSnap = await getDoc(userRef);
        appUser = freshSnap.data() as AppUser;
      }

      set({ user: appUser });
      return appUser;
    } catch (error) {
      console.error("Google login error:", error);
      return null;
    }
  },

  logout: async () => {
    await signOut(auth);
    document.cookie = "token=; path=/; max-age=0";
    hasInitialized = false; // ← reset so initAuth works again
    set({ user: null });
  },

  initAuth: () => {
    if (hasInitialized) return;
    hasInitialized = true;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (!firebaseUser) {
          set({ user: null, loading: false });
          return;
        }

        const userRef = doc(db, "users", firebaseUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          set({ user: userSnap.data() as AppUser, loading: false });
        } else {
          // ✅ New user: doc may not exist yet if loginWithGoogle hasn't finished
          // Set loading false so the UI doesn't hang
          set({ loading: false });
        }

        if (firebaseUser.uid) {
          const cartStore = useCartStore.getState();
          await cartStore.mergeGuestCartToUserCart(firebaseUser.uid);
          await cartStore.loadCart(firebaseUser.uid);
        }
      } catch (error) {
        console.error("Auth init error:", error);
        set({ loading: false });
      }
    });

    return unsubscribe;
  },

  // ✅ UPDATE PROFILE (THIS IS WHAT YOU NEED)
  updateProfile: async ({
    fullName,
    email,
    phone,
  }: {
    fullName: string;
    email: string;
    phone: string;
  }) => {
    const user = get().user;
    if (!user) return;

    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      fullName,
      email,
      phone,
      updatedAt: serverTimestamp(),
    });

    // 🔥 update Zustand instantly
    set({
      user: {
        ...user,
        fullName,
        email,
        phone,
      },
    });
  },
}));
