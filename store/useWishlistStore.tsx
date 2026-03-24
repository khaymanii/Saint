import { create } from "zustand";
import { toast } from "sonner";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "@/firebaseConfig/firebase";

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selectedColor: string;
}

interface WishlistStore {
  wishlist: WishlistItem[];

  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number, selectedColor?: string) => void;

  loadWishlist: (userId?: string) => void;
  mergeGuestWishlistToUserWishlist: (userId: string) => Promise<void>;
}

const WISHLIST_KEY = "wishlist-storage";
const MERGE_KEY = "wishlist-merged";

const saveToLocal = (wishlist: WishlistItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
};

const loadFromLocal = (): WishlistItem[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
};

export const useWishlistStore = create<WishlistStore>((set, get) => {
  const syncWishlistToFirebase = async (wishlist: WishlistItem[]) => {
    const user = auth.currentUser;

    if (!user?.uid) return;

    try {
      await setDoc(doc(db, "wishlists", user.uid), {
        wishlist,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to sync wishlist");
    }
  };

  return {
    wishlist: loadFromLocal(),

    addToWishlist: (item) => {
      set((state) => {
        const exists = state.wishlist.find(
          (i) => i.id === item.id && i.selectedColor === item.selectedColor,
        );

        if (exists) {
          toast.info("Already saved in wishlist 💖");
          return state;
        }

        const updated = [...state.wishlist, item];

        saveToLocal(updated);
        syncWishlistToFirebase(updated);

        toast.success("Saved to wishlist 💖");

        return { wishlist: updated };
      });
    },

    removeFromWishlist: (id, selectedColor) => {
      set((state) => {
        const updated = state.wishlist.filter((item) => {
          if (selectedColor) {
            return !(item.id === id && item.selectedColor === selectedColor);
          }
          return item.id !== id;
        });

        saveToLocal(updated);
        syncWishlistToFirebase(updated);

        toast.error("Removed from wishlist 💔");

        return { wishlist: updated };
      });
    },

    mergeGuestWishlistToUserWishlist: async (userId: string) => {
      try {
        const alreadyMerged = localStorage.getItem(MERGE_KEY);

        if (alreadyMerged) {
          toast.info("Wishlist already synced — skipping");
          return;
        }
        const guest = loadFromLocal();

        const ref = doc(db, "wishlists", userId);
        const snap = await getDoc(ref);

        let userWishlist: WishlistItem[] = [];

        if (snap.exists()) {
          userWishlist = snap.data().wishlist || [];
        }

        const merged = [...userWishlist];

        guest.forEach((g) => {
          const exists = merged.find(
            (i) => i.id === g.id && i.selectedColor === g.selectedColor,
          );

          if (!exists) merged.push(g);
        });

        await setDoc(ref, { wishlist: merged });

        set({ wishlist: merged });
        saveToLocal(merged);

        localStorage.setItem(MERGE_KEY, "true");
        localStorage.removeItem(WISHLIST_KEY);

        toast.success("Wishlist synced 💖");
      } catch (err) {
        console.error(err);
        toast.error("Wishlist sync failed");
      }
    },

    loadWishlist: async (userId?: string) => {
      if (!userId) return;

      try {
        const ref = doc(db, "wishlists", userId);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();
          const wishlist = data.wishlist || [];

          set({ wishlist });
          saveToLocal(wishlist);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load wishlist");
      }
    },
  };
});
