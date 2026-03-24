import { create } from "zustand";
import { db, auth } from "@/firebaseConfig/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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
  placeOrder: () => Promise<boolean>;
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

      await addDoc(collection(db, "orders"), {
        ...formData,
        items: cart,
        total,
        userId: auth.currentUser?.uid || null,
        createdAt: serverTimestamp(),
        status: "pending",
      });

      clearCart();
      toast.success("Order placed 🎉");

      set({ loading: false });

      return true;
    } catch (err) {
      console.error(err);
      toast.error("Order failed");
      set({ loading: false });
      return false;
    }
  },
}));
