"use client";

import { PRODUCTS } from "@/data/shop";
import { Heart } from "lucide-react";
import Link from "next/link";
import { ShopCard } from "../layout/ShopCard";

export default function EmptyWishlist() {
  return (
    <section className="w-full bg-gray-100 py-20 px-4">
      <div className="flex items-center justify-center">
        <div className="border rounded-xl p-8 text-center relative flex flex-col items-center justify-center shadow-md max-w-4xl bg-white">
          {/* Check Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-[#063c71] flex items-center justify-center">
              <Heart className="w-10 h-10 text-white animate-pulse" />
            </div>
          </div>

          {/* Text */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Your wishlist is empty
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Discover amazing sports gear and save your favorites for later.
          </p>

          {/* Button */}
          <Link href="/shop" className="inline-block">
            <button className="bg-[#063c71] text-white text-sm font-medium px-5 py-2 rounded-md hover:opacity-90 transition cursor-pointer">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <h2 className="sm:text-3xl text-2xl font-bold text-[#063c71] mb-10  mt-20">
        Recommended Gears
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.slice(4, 8).map((item) => (
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
    </section>
  );
}
