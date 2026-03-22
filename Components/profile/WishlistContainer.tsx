"use client";

import WishlistList from "./WishlistList";
import EmptyWishlist from "./EmptyWishlist";
import { useWishlistStore } from "@/store/useWishlistStore";

export default function WishlistContainer() {
  const { wishlist } = useWishlistStore();

  const hasItems = wishlist.length > 0;

  return <div>{hasItems ? <WishlistList /> : <EmptyWishlist />}</div>;
}
