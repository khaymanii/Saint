"use client";

import { create } from "zustand";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "@/firebaseConfig/firebase";
import { db } from "@/firebaseConfig/firebase";
import router from "next/router";

interface AuthState {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  initAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  loginWithGoogle: async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      // 🔥 Save user to Firestore
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date(),
        });
      }

      set({ user });
      router.push("/checkout");
    } catch (error) {
      console.error("Google login error:", error);
    }
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null });
    router.push("/");
  },

  initAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },
}));
