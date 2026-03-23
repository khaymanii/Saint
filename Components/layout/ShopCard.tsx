"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { slugify } from "@/lib/slugify";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useHydration } from "@/hooks/useHydration";

interface ShopCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string[];
}

export function ShopCard({ id, name, brand, price, image }: ShopCardProps) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const mounted = useHydration();

  const isWishlisted = useMemo(() => {
    return wishlist.some((item) => item.id === id);
  }, [wishlist, id]);

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isWishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id,
        name,
        price,
        image: image?.[0] || "/images/ball1.jpg",
        quantity: 1,
        selectedColor: "default",
      });
    }
  };

  return (
    <div className="group cursor-pointer border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      <Link href={`/shop/${slugify(name)}`}>
        <div className="relative w-full h-52 sm:h-64 lg:h-80 bg-gray-100 overflow-hidden">
          <Image
            src={image?.[0] || "/images/ball1.jpg"}
            alt={name}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition duration-300"
          />

          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 bg-white rounded-full p-2 shadow cursor-pointer"
          >
            <Heart
              size={18}
              className={
                mounted && isWishlisted ? "fill-[#063c71]" : "text-[#063c71]"
              }
            />
          </button>
        </div>
      </Link>

      <Link href={`/shop/${slugify(name)}`}>
        <div className="p-3 flex flex-col gap-2">
          <div>
            <p className="sm:text-sm text-xs font-medium line-clamp-1">
              {name}
            </p>
            <p className="text-xs text-gray-500">{brand}</p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="text-sm font-semibold text-gray-900">${price}</div>

            <button className="flex text-xs items-center gap-1 bg-[#063c71] text-white p-2 rounded-full hover:bg-[#042a50] transition">
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
