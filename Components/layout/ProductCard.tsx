"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  brand: string;
  price: number;
  image: string;
}

export function ProductCard({ name, brand, price, image }: ProductCardProps) {
  return (
    <div className="group cursor-pointer border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      {/* Image */}
      <div className="relative w-full h-52 sm:h-64 lg:h-80 bg-gray-100 overflow-hidden">
        {" "}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
        {/* Wishlist */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
          <Heart size={18} />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col gap-2">
        <div>
          <p className="sm:text-sm text-xs font-medium line-clamp-1">{name}</p>
          <p className="text-xs text-gray-500">{brand}</p>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm font-semibold text-gray-900">${price}</div>

          <button className="flex text-xs items-center gap-1 bg-[#063c71] text-white p-2 rounded-full hover:bg-[#042a50] transition">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
