"use client";

import Link from "next/link";

export default function OrderConfirmation() {
  return (
    <section className="w-full flex items-center justify-center bg-gray-100 py-20 px-4">
      <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full flex flex-col md:flex-row items-center gap-8 p-8">
        <div className="flex-1">
          <div className="border rounded-xl p-6 text-center relative">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-[#063c71] flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Your Order is Confirmed
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Thank you for your purchase. Your items will be shipped shortly.
            </p>

            <Link href="/shop" className="inline-block">
              <button className="bg-[#063c71] text-white text-sm font-medium px-5 py-2 rounded-md hover:opacity-90 transition cursor-pointer">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
