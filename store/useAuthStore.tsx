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

interface AuthState {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<User | null>;
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

      console.log("Logged in user:", user);

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
      return user; // ✅ return user
    } catch (error) {
      console.error("Google login error:", error);
      return null; // ✅ return null on error
    }
  },

  logout: async () => {
    await signOut(auth);
    set({ user: null });
  },

  initAuth: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },
}));
