"use client";

import { Truck, Headphones, ShieldCheck } from "lucide-react";

export function Features() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-4 rounded-full">
            <div className="bg-[#063c71] p-3 rounded-full text-white">
              <Truck size={22} />
            </div>
          </div>

          <h3 className="mt-4 font-semibold text-sm tracking-wide">
            SwIFT AND FAST DELIVERY
          </h3>

          <p className="text-xs text-gray-600 mt-2">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-4 rounded-full">
            <div className="bg-[#063c71] p-3 rounded-full text-white">
              <Headphones size={22} />
            </div>
          </div>

          <h3 className="mt-4 font-semibold text-sm tracking-wide">
            24/7 CUSTOMER SERVICE
          </h3>

          <p className="text-xs text-gray-600 mt-2">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-4 rounded-full">
            <div className="bg-[#063c71] p-3 rounded-full text-white">
              <ShieldCheck size={22} />
            </div>
          </div>

          <h3 className="mt-4 font-semibold text-sm tracking-wide">
            MONEY BACK GUARANTEE
          </h3>

          <p className="text-xs text-gray-600 mt-2">
            We return money within 30 days
          </p>
        </div>
      </div>
    </section>
  );
}
