import WishlistList from "./WishlistList";
import EmptyWishlist from "./EmptyWishlist";
import { WISHLIST_ITEMS } from "@/data/wishlist";

export default function WishlistContainer() {
  const hasItems = WISHLIST_ITEMS.length > 0;

  return <div>{hasItems ? <WishlistList /> : <EmptyWishlist />}</div>;
}
