"use client";

import { create } from "zustand";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";
import { toast } from "sonner"; // shadcn toast

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

interface CartState {
  cartItems: CartItem[];
  cartCount: number;
  subtotal: number;
  loading: boolean;

  fetchCart: (userId: string) => Promise<void>;
  addToCart: (
    userId: string,
    item: Omit<CartItem, "quantity">,
  ) => Promise<void>;
  removeFromCart: (userId: string, itemId: string) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  cartCount: 0,
  subtotal: 0,
  loading: false,

  fetchCart: async (userId) => {
    if (!userId) return;

    set({ loading: true });

    try {
      const cartRef = doc(db, "carts", userId);
      const snap = await getDoc(cartRef);

      if (snap.exists()) {
        const data = snap.data();

        set({
          cartItems: data.items || [],
          cartCount: data.cartCount || 0,
          subtotal: data.subtotal || 0,
        });
      } else {
        await setDoc(cartRef, {
          items: [],
          cartCount: 0,
          subtotal: 0,
        });

        set({
          cartItems: [],
          cartCount: 0,
          subtotal: 0,
        });
      }
    } catch (err) {
      console.error("fetchCart error:", err);
    } finally {
      set({ loading: false });
    }
  },

  addToCart: async (userId, item) => {
    if (!userId) return;

    const { cartItems } = get();

    // 🔥 Prevent duplicates (increase quantity instead)
    const existingItem = cartItems.find((i) => i.id === item.id);

    let updatedItems;

    if (existingItem) {
      updatedItems = cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
      );

      toast(`${item.name} quantity increased`);
    } else {
      updatedItems = [...cartItems, { ...item, quantity: 1 }];

      toast.success(`${item.name} added to cart`);
    }

    const updatedSubtotal = updatedItems.reduce(
      (acc, i) => acc + i.price * i.quantity,
      0,
    );

    const cartRef = doc(db, "carts", userId);

    try {
      await updateDoc(cartRef, {
        items: updatedItems,
        cartCount: updatedItems.reduce((acc, i) => acc + i.quantity, 0),
        subtotal: updatedSubtotal,
      });

      set({
        cartItems: updatedItems,
        cartCount: updatedItems.reduce((acc, i) => acc + i.quantity, 0),
        subtotal: updatedSubtotal,
      });
    } catch (err) {
      console.error("addToCart error:", err);

      toast.error("Failed to add gear to cart");
    }
  },

  removeFromCart: async (userId, itemId) => {
    if (!userId) return;

    const { cartItems } = get();

    const updatedItems = cartItems.filter((i) => i.id !== itemId);

    const updatedSubtotal = updatedItems.reduce(
      (acc, i) => acc + i.price * i.quantity,
      0,
    );

    const cartRef = doc(db, "carts", userId);

    try {
      await updateDoc(cartRef, {
        items: updatedItems,
        cartCount: updatedItems.reduce((acc, i) => acc + i.quantity, 0),
        subtotal: updatedSubtotal,
      });

      set({
        cartItems: updatedItems,
        cartCount: updatedItems.reduce((acc, i) => acc + i.quantity, 0),
        subtotal: updatedSubtotal,
      });

      toast.success("Gear removed from cart");
    } catch (err) {
      console.error("removeFromCart error:", err);

      toast.error("Failed to remove gear from cart");
    }
  },
}));
