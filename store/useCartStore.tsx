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
  shipping?: number;
}

export type AddToCartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  selectedSize: string;
  quantity?: number;
};

interface CartStore {
  cart: CartItem[];
  addToCart: (item: AddToCartItem) => void;
  removeFromCart: (item: CartItem) => void;
  mergeGuestCartToUserCart: (userId: string) => Promise<void>;
  increaseQty: (item: CartItem) => void;
  decreaseQty: (item: CartItem) => void;
  clearCart: () => void;

  loadCart: (userId?: string) => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
}

/* ================= LOCAL STORAGE HELPERS ================= */

const CART_KEY = "cart-storage";
const MERGE_KEY = "cart-merged";

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
          (p) => p.id === item.id && p.selectedSize === item.selectedSize,
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

    removeFromCart: (item) => {
      set((state) => {
        const updatedCart = state.cart.filter(
          (p) => !(p.id === item.id && p.selectedSize === item.selectedSize),
        );

        toast.error("Gear removed from cart ❌");

        saveToLocal(updatedCart);
        syncCartToFirebase(updatedCart);

        return { cart: updatedCart };
      });
    },

    mergeGuestCartToUserCart: async (userId: string) => {
      try {
        const alreadyMerged = localStorage.getItem(MERGE_KEY);

        if (alreadyMerged) {
          toast.info("Cart already synced — skipping");
          return;
        }

        const guestCart = loadFromLocal();

        const ref = doc(db, "carts", userId);
        const snap = await getDoc(ref);

        let userCart: CartItem[] = [];

        if (snap.exists()) {
          userCart = snap.data().cart || [];
        }

        const merged = [...userCart];

        guestCart.forEach((guestItem) => {
          const existing = merged.find(
            (i) =>
              i.id === guestItem.id &&
              i.selectedSize === guestItem.selectedSize,
          );

          if (!existing) {
            merged.push(guestItem);
          }
        });

        await setDoc(ref, { cart: merged });

        set({ cart: merged });
        saveToLocal(merged);

        localStorage.setItem(MERGE_KEY, "true");
        localStorage.removeItem(CART_KEY);

        toast.success("Cart synced with your account 🛒");
      } catch (err) {
        console.error(err);
        toast.error("Cart sync failed");
      }
    },

    increaseQty: (item) => {
      set((state) => {
        const updatedCart = state.cart.map((p) =>
          p.id === item.id && p.selectedSize === item.selectedSize
            ? { ...p, quantity: p.quantity + 1 }
            : p,
        );

        toast.info("Quantity increased ➕");

        saveToLocal(updatedCart);
        syncCartToFirebase(updatedCart);

        return { cart: updatedCart };
      });
    },

    decreaseQty: (item) => {
      set((state) => {
        const updatedCart = state.cart.map((p) =>
          p.id === item.id && p.selectedSize === item.selectedSize
            ? { ...p, quantity: Math.max(1, p.quantity - 1) }
            : p,
        );

        toast.info("Quantity decreased ➖");

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
