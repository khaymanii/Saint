"use client";

import { Skeleton } from "@/Components/ui/skeleton";

export default function ShopCardSkeleton() {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm">
      {/* IMAGE */}
      <div className="relative w-full h-52 sm:h-64 lg:h-80 bg-gray-100">
        <Skeleton className="w-full h-full" />

        {/* Wishlist button skeleton */}
        <div className="absolute top-3 right-3">
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 flex flex-col gap-2">
        {/* NAME */}
        <Skeleton className="h-3 w-3/4" />

        {/* BRAND */}
        <Skeleton className="h-3 w-1/2" />

        {/* PRICE + CART */}
        <div className="flex items-center justify-between mt-2">
          <Skeleton className="h-4 w-16" />

          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}
