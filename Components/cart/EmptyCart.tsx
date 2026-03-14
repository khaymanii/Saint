"use client";

import Image from "next/image";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <section className="w-full flex items-center justify-center bg-gray-100 py-20 px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        {/* Illustration */}
        <div className="mb-6">
          <Image
            src="/svg/emptycart.svg"
            alt="Empty cart"
            width={260}
            height={260}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Your cart is empty
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6">
          Looks like you haven’t added any gear yet.
        </p>

        {/* Button */}
        <Link
          href="/shop"
          className="bg-[#063c71] text-white text-sm font-medium px-6 py-2.5 rounded-md hover:opacity-90 transition cursor-pointer"
        >
          Start Shopping
        </Link>
      </div>
    </section>
  );
}
