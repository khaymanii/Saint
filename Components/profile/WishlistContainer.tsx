"use client";

import WishlistList from "./WishlistList";
import EmptyWishlist from "./EmptyWishlist";
import { useProducts } from "@/hooks/useProducts";
import { useWishlistStore } from "@/store/useWishlistStore";
import { ShopCard } from "../layout/ShopCard";

export default function WishlistContainer() {
  const { products } = useProducts();
  const { wishlist } = useWishlistStore();

  const hasItems = wishlist.length > 0;

  return (
    <div>
      {hasItems ? <WishlistList /> : <EmptyWishlist />}{" "}
      <h2 className="text-xl font-semibold mb-10 mt-30 text-[#063c71]">
        Recommended Wears
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(2, 6).map((item) => (
          <ShopCard
            key={item.id}
            name={item.name}
            brand={item.brand}
            price={item.price}
            image={item.images}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
