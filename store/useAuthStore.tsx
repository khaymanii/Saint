"use client";

import { create } from "zustand";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig/firebase";
import { useCartStore } from "@/store/useCartStore";
import { getIdToken } from "firebase/auth";

interface AuthState {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<User | null>;
  logout: () => Promise<void>;
  initAuth: () => (() => void) | void;
}

let hasInitialized = false;

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  loginWithGoogle: async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const token = await user.getIdToken();
      document.cookie = `token=${token}; path=/;`;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: serverTimestamp(),
        });
      }

      set({ user });
      return user;
    } catch (error) {
      console.error("Google login error:", error);
      return null;
    }
  },

  logout: async () => {
    await signOut(auth);
    document.cookie = "token=; path=/; max-age=0";
    set({ user: null });
  },

  initAuth: () => {
    if (hasInitialized) return;
    hasInitialized = true;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        set({ user, loading: true });

        if (user?.uid) {
          const cartStore = useCartStore.getState();
          await cartStore.mergeGuestCartToUserCart(user.uid);
          await cartStore.loadCart(user.uid);
        }

        set({ user, loading: false });
      } catch (error) {
        console.error("Auth init error:", error);
        set({ loading: false });
      }
    });

    return unsubscribe;
  },
}));
