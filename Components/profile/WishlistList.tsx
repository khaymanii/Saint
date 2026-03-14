import { WISHLIST_ITEMS } from "@/data/wishlist";
import WishlistItem from "./WishlistItem";
import EmptyWishlist from "./EmptyWishlist";

export default function WishlistList() {
  if (WISHLIST_ITEMS.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Wishlist</h2>

      {WISHLIST_ITEMS.map((item) => (
        <WishlistItem key={item.id} {...item} />
      ))}
    </div>
  );
}
