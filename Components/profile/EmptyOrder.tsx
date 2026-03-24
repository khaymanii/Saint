"use client";

import { PackageX } from "lucide-react";
import Link from "next/link";

export default function EmptyOrder() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      {/* Icon */}
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <PackageX className="w-8 h-8 text-gray-500" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">No orders yet</h2>

      <p className="text-sm text-gray-500 mt-2 max-w-sm">
        You haven’t placed any orders yet. Start shopping to see your orders
        here.
      </p>

      <Link href="/shop" className="inline-block mt-6">
        <button className="bg-[#063c71] text-white text-sm font-medium px-5 py-2 rounded-md hover:opacity-90 transition cursor-pointer">
          Start Shopping
        </button>
      </Link>
    </div>
  );
}
