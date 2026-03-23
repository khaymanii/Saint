import { create } from "zustand";
import { toast } from "sonner";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "@/firebaseConfig/firebase";

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
  addToCart: (item: AddToCartItem) => void;
  removeFromCart: (id: number) => void;
  mergeGuestCartToUserCart: (userId: string) => Promise<void>;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;

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

export const useCartStore = create<CartStore>((set, get) => {
  const syncCartToFirebase = async (cart: CartItem[]) => {
    const user = auth.currentUser;

    if (!user?.uid) {
      console.log("Guest user — skipping Firebase sync");
      return;
    }

    try {
      await setDoc(doc(db, "carts", user.uid), { cart });
    } catch (error) {
      console.error("Failed to sync cart:", error);
      toast.error("Failed to sync cart to cloud");
    }
  };

  return {
    cart: loadFromLocal(),

    addToCart: (item) => {
      set((state) => {
        const existing = state.cart.find(
          (p) =>
            p.id === item.id &&
            p.selectedSize === item.selectedSize &&
            p.selectedColor === item.selectedColor,
        );

        let updatedCart: CartItem[];

        if (existing) {
          toast.info("Gear already in cart — go to cart to update quantity");
          return state;
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

        saveToLocal(updatedCart);

        syncCartToFirebase(updatedCart);
        return { cart: updatedCart };
      });
    },

    removeFromCart: (id) => {
      set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== id);

        toast.error("Gear removed from cart ❌");

        saveToLocal(updatedCart);
        syncCartToFirebase(updatedCart);
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

        const merged = [...userCart];

        guestCart.forEach((guestItem) => {
          const existing = merged.find((i) => i.id === guestItem.id);

          if (existing) {
            existing.quantity += guestItem.quantity;
          } else {
            merged.push(guestItem);
          }
        });

        await setDoc(ref, { cart: merged });

        set({ cart: merged });
        saveToLocal(merged);

        toast.success("Cart synced with your account 🛒");
      } catch (err) {
        console.error(err);
        toast.error("Cart sync failed");
      }
    },

    increaseQty: (id) => {
      set((state) => {
        const updatedCart = state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );

        toast.info("Quantity increased ➕");

        saveToLocal(updatedCart);
        syncCartToFirebase(updatedCart);
        return { cart: updatedCart };
      });
    },

    decreaseQty: (id) => {
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
        syncCartToFirebase(updatedCart);
        return { cart: updatedCart };
      });
    },

    clearCart: () => {
      set(() => {
        const empty: CartItem[] = [];

        toast.success("Cart cleared 🧹");

        saveToLocal(empty);
        syncCartToFirebase(empty);
        return { cart: empty };
      });
    },

    loadCart: async (userId?: string) => {
      try {
        if (!userId) return;

        const ref = doc(db, "carts", userId);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();

          const cart = data.cart || [];

          set({ cart });

          saveToLocal(cart);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load cart");
      }
    },

    getTotalItems: () => get().cart.length,
    getTotalPrice: () =>
      get().cart.reduce((t, i) => t + i.price * i.quantity, 0),
  };
});
