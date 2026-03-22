"use client";

import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";

export default function OrderSummary() {
  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = 0;

  const total = subtotal + shipping;

  return (
    <div>
      {/* Items */}
      <div className="space-y-6 mb-8 bg-gray-50 p-6 rounded-lg h-fit">
        <h2 className="sm:text-3xl text-2xl font-semibold mb-8 text-center">
          Order Summary
        </h2>

        {cart.map((item) => (
          <div
            key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="50px"
                  className="object-contain"
                />
              </div>

              <div>
                <p>{item.name}</p>

                {/* ✅ Variant info */}
                <p className="text-xs text-gray-500">
                  {item.selectedColor} • {item.selectedSize}
                </p>

                {/* ✅ Quantity */}
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>

            {/* ✅ Price × quantity */}
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-3 border-t pt-4">
        <div className="flex justify-between text-sm">
          <p>Subtotal:</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>

        <div className="flex justify-between text-sm">
          <p>Shipping:</p>
          <p>{shipping === 0 ? "Free" : `$${shipping}`}</p>
        </div>

        <div className="flex justify-between font-semibold text-lg border-t pt-3">
          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>

      <button
        disabled={cart.length === 0}
        className="mt-6 bg-[#063c71] text-xs text-white px-8 py-3 rounded-md disabled:opacity-50 cursor-pointer"
      >
        Place Order
      </button>
    </div>
  );
}
