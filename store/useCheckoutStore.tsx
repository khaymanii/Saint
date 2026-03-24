import { create } from "zustand";
import { db, auth } from "@/firebaseConfig/firebase";
import { doc, collection, setDoc, serverTimestamp } from "firebase/firestore";
import { useCartStore } from "./useCartStore";
import { toast } from "sonner";

interface CheckoutData {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  saveInfo: boolean;
}

interface CheckoutStore {
  formData: CheckoutData;
  setFormData: (data: Partial<CheckoutData>) => void;
  placeOrder: () => Promise<string | false>;
  loading: boolean;
}

export const useCheckoutStore = create<CheckoutStore>((set, get) => ({
  formData: {
    name: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    saveInfo: true,
  },

  loading: false,

  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  placeOrder: async () => {
    const { formData } = get();
    const cart = useCartStore.getState().cart;
    const total = useCartStore.getState().getTotalPrice();
    const clearCart = useCartStore.getState().clearCart;

    if (cart.length === 0) {
      toast.error("Cart is empty");
      return false;
    }

    try {
      set({ loading: true });

      // ✅ Create doc reference FIRST
      const orderRef = doc(collection(db, "orders"));

      // ✅ Generate short order ID
      const orderId = `ST-${orderRef.id.slice(0, 6).toUpperCase()}`;

      // ✅ Save order (single write)
      await setDoc(orderRef, {
        orderId,
        ...formData,
        items: cart,
        total,
        userId: auth.currentUser?.uid || null,
        createdAt: serverTimestamp(),
        status: "pending",
      });

      clearCart();

      toast.success(`Order placed 🎉 (${orderId})`);

      set({ loading: false });

      return orderId; // ✅ return for UI usage
    } catch (err) {
      console.error(err);
      toast.error("Order failed");
      set({ loading: false });
      return false;
    }
  },
}));
