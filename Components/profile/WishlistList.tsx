import { WISHLIST_ITEMS } from "@/data/wishlist";
import WishlistItem from "./WishlistItem";

export default function WishlistList() {
  return (
    <div>
      <div className="flex gap-6 text-base font-semibold mb-2">Wishlist</div>

      {WISHLIST_ITEMS.map((item) => (
        <WishlistItem key={item.id} {...item} />
      ))}
    </div>
  );
}
