"use client";

import { create } from "zustand";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
  signInWithRedirect,
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
          serverTimestamp,
        });
      }

      set({ user });
      return user; // ✅ return user
    } catch (error) {
      console.error("Google login error:", error);
      return null; // ✅ return null on error
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
      set({ user, loading: false });

      // 🔥 THIS IS THE MISSING PIECE
      if (user?.uid) {
        const cartStore = useCartStore.getState();

        await cartStore.mergeGuestCartToUserCart(user.uid);
        await cartStore.loadCart(user.uid);
      }
    });

    return unsubscribe;
  },
}));
