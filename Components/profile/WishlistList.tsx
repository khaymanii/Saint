import WishlistItem from "./WishlistItem";
import { WISHLIST_ITEMS } from "@/data/wishlist";

export default function WishlistList() {
  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl font-semibold mb-6">Wishlist</h2>

      <div className="space-y-2">
        {WISHLIST_ITEMS.map((item) => (
          <WishlistItem
            key={item.id}
            name={item.name}
            color={item.color}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
