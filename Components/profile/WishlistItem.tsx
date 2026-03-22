"use client";

import Image from "next/image";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";
import { slugify } from "@/lib/slugify";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
}

export default function WishlistItem({ id, name, price, image }: Props) {
  const { removeFromWishlist } = useWishlistStore();

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault(); // prevents link navigation
    removeFromWishlist(id);
  };

  return (
    <div className="border-b py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <Link href={`/shop/${slugify(name)}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={handleRemove}
            className="text-red-500 hover:scale-110 transition"
          >
            ✕
          </button>

          <Image
            src={image}
            alt={name}
            width={70}
            height={70}
            loading="eager"
            className="rounded object-cover w-17.5 h-17.5"
          />

          <div>
            <h4 className="font-medium text-sm sm:text-base">{name}</h4>

            <p className="text-xs sm:text-sm text-gray-500">Quantity : 1</p>
          </div>
        </div>
      </Link>

      <Link href={`/shop/${slugify(name)}`}>
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <span className="font-medium text-sm sm:text-base">${price}</span>
          <button className="bg-[#063c71] text-white px-4 py-2 text-sm rounded-md hover:opacity-90 transition">
            Add to cart
          </button>
        </div>
      </Link>
    </div>
  );
}
