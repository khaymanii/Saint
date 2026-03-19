"use client";

import Image from "next/image";
import { ORDER_ITEMS } from "@/data/checkout";
import { useState } from "react";

export default function OrderSummary() {
  const [payment, setPayment] = useState("cod");

  const subtotal = ORDER_ITEMS.reduce((acc, item) => acc + item.price, 0);

  const shipping = 0;

  const total = subtotal + shipping;

  return (
    <div>
      {/* Items */}
      <div className="space-y-6 mb-8 bg-gray-50 p-6 rounded-lg h-fit">
        <h2 className="sm:text-3xl text-2xl font-semibold mb-8 text-center">
          Order Summary
        </h2>
        {ORDER_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-contain"
                />
              </div>

              <p>{item.name}</p>
            </div>

            <p>${item.price}</p>
          </div>
        ))}
      </div>
      {/* Totals */}
      <div className="space-y-3 border-t pt-4">
        <div className="flex justify-between text-sm">
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </div>

        <div className="flex justify-between text-sm">
          <p>Shipping:</p>
          <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
        </div>

        <div className="flex justify-between font-semibold text-lg border-t pt-3">
          <p>Total:</p>
          <p>${total}</p>
        </div>
      </div>
      {/* Payment */}
      {/* <div className="mt-6 space-y-4 text-sm">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            checked={payment === "bank"}
            onChange={() => setPayment("bank")}
          />

          <span>Bank</span>
        </label>
      </div>

     <div className="flex gap-3 mt-6">
        <input
          placeholder="Coupon Code"
          className="border p-3 rounded w-full text-xs"
        />

        <button className="bg-[#063c71] text-white px-6 rounded text-xs">
          Apply Coupon
        </button>
      </div>
     */}

      {/* Place Order */}
      <button className="mt-6 bg-[#063c71] text-xs text-white px-8 py-3 rounded-md">
        Place Order
      </button>
    </div>
  );
}
