import { create } from "zustand";
import { toast } from "sonner";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig/firebase";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  shipping?: number;
}

export type AddToCartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  selectedSize: string;
  selectedColor: string;
  quantity?: number;
};

interface CartStore {
  cart: CartItem[];
  addToCart: (item: AddToCartItem, userId?: string) => void;
  removeFromCart: (id: number, userId?: string) => void;
  mergeGuestCartToUserCart: (userId: string) => Promise<void>;
  increaseQty: (id: number, userId?: string) => void;
  decreaseQty: (id: number, userId?: string) => void;
  clearCart: (userId?: string) => void;

  loadCart: (userId?: string) => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
}

/* ================= LOCAL STORAGE HELPERS ================= */

const CART_KEY = "cart-storage";

const saveToLocal = (cart: CartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const loadFromLocal = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

/* ================= STORE ================= */

export const useCartStore = create<CartStore>((set, get) => {
  const syncCartToFirebase = async (userId: string, cart: CartItem[]) => {
    try {
      await setDoc(doc(db, "carts", userId), { cart });
    } catch (error) {
      console.error("Firebase sync failed:", error);
      toast.error("Failed to sync cart to cloud");
    }
  };

  return {
    // 🧠 INIT FROM LOCAL STORAGE
    cart: loadFromLocal(),

    /* ================= ADD TO CART ================= */
    addToCart: (item, userId) => {
      set((state) => {
        const existing = state.cart.find(
          (p) =>
            p.id === item.id &&
            p.selectedSize === item.selectedSize &&
            p.selectedColor === item.selectedColor,
        );

        let updatedCart: CartItem[];

        if (existing) {
          updatedCart = state.cart.map((p) =>
            p.id === item.id &&
            p.selectedSize === item.selectedSize &&
            p.selectedColor === item.selectedColor
              ? { ...p, quantity: p.quantity + (item.quantity || 1) }
              : p,
          );

          toast.info("Increased quantity in cart 🛒");
        } else {
          updatedCart = [
            ...state.cart,
            {
              ...item,
              quantity: item.quantity || 1,
            },
          ];

          toast.success("Gear added to cart 🛍️");
        }

        // 💾 LOCAL STORAGE
        saveToLocal(updatedCart);

        // ☁️ FIREBASE SYNC
        if (userId) syncCartToFirebase(userId, updatedCart);

        return { cart: updatedCart };
      });
    },

    /* ================= REMOVE ================= */
    removeFromCart: (id, userId) => {
      set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== id);

        toast.error("Gear removed from cart ❌");

        saveToLocal(updatedCart);
        if (userId) syncCartToFirebase(userId, updatedCart);

        return { cart: updatedCart };
      });
    },

    mergeGuestCartToUserCart: async (userId: string) => {
      try {
        const guestCart = loadFromLocal();

        const ref = doc(db, "carts", userId);
        const snap = await getDoc(ref);

        let userCart: CartItem[] = [];

        if (snap.exists()) {
          userCart = snap.data().cart || [];
        }

        // 🔥 MERGE LOGIC
        const merged = [...userCart];

        guestCart.forEach((guestItem) => {
          const existing = merged.find((i) => i.id === guestItem.id);

          if (existing) {
            existing.quantity += guestItem.quantity;
          } else {
            merged.push(guestItem);
          }
        });

        // Save merged result
        await setDoc(ref, { cart: merged });

        // update local + state
        set({ cart: merged });
        saveToLocal(merged);

        toast.success("Cart synced with your account 🛒");
      } catch (err) {
        console.error(err);
        toast.error("Cart sync failed");
      }
    },

    /* ================= INCREASE ================= */
    increaseQty: (id, userId) => {
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );

        toast.info("Quantity increased ➕");

        saveToLocal(updatedCart);
        if (userId) syncCartToFirebase(userId, updatedCart);

        return { cart: updatedCart };
      });
    },

    /* ================= DECREASE ================= */
    decreaseQty: (id, userId) => {
      set((state) => {
        const item = state.cart.find((i) => i.id === id);

        let updatedCart: CartItem[];

        if (item?.quantity === 1) {
          updatedCart = state.cart.filter((i) => i.id !== id);
          toast.warning("Item removed from cart");
        } else {
          updatedCart = state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          );

          toast.info("Quantity decreased ➖");
        }

        saveToLocal(updatedCart);
        if (userId) syncCartToFirebase(userId, updatedCart);

        return { cart: updatedCart };
      });
    },

    /* ================= CLEAR ================= */
    clearCart: (userId) => {
      set(() => {
        const empty: CartItem[] = [];

        toast.success("Cart cleared 🧹");

        saveToLocal(empty);
        if (userId) syncCartToFirebase(userId, empty);

        return { cart: empty };
      });
    },

    /* ================= LOAD FROM FIREBASE ================= */
    loadCart: async (userId?: string) => {
      try {
        if (!userId) return;

        const ref = doc(db, "carts", userId);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();

          const cart = data.cart || [];

          set({ cart });

          // sync local too
          saveToLocal(cart);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load cart");
      }
    },

    /* ================= TOTALS ================= */
    getTotalItems: () => get().cart.reduce((t, i) => t + i.quantity, 0),

    getTotalPrice: () =>
      get().cart.reduce((t, i) => t + i.price * i.quantity, 0),
  };
});
