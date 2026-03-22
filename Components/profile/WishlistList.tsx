"use client";

import EmptyWishlist from "./EmptyWishlist";
import WishlistItem from "./WishlistItem";
import { useWishlistStore } from "@/store/useWishlistStore";

export default function WishlistList() {
  const { wishlist } = useWishlistStore();

  return (
    <div>
      <div className="flex gap-6 text-base font-semibold mb-2">Wishlist</div>

      {wishlist.length === 0 ? (
        <div className="text-sm text-gray-500 py-10 text-center">
          <EmptyWishlist />
        </div>
      ) : (
        wishlist.map((item) => (
          <WishlistItem
            key={`${item.id}-${item.selectedColor}`}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            color={item.selectedColor}
          />
        ))
      )}
    </div>
  );
}
