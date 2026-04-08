"use client";

import CartItem from "@/Components/cart/CartItem";
import Link from "next/link";
import { Features } from "@/Components/layout/Features";
import { useCartStore } from "@/store/useCartStore";
import EmptyCart from "@/Components/cart/EmptyCart";
import { useAuthStore } from "@/store/useAuthStore";
import { getProtectedRoute } from "@/lib/getProtectedRoute";
import { useHydration } from "@/hooks/useHydration";
import { Plus } from "lucide-react";
import { BackButton } from "@/Components/layout/BackButton";
import { formatPrice } from "@/lib/formatPrice";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const user = useAuthStore((state) => state.user);
  const checkoutHref = getProtectedRoute(user, "/checkout");
  const mounted = useHydration();

  if (!mounted) return null;

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // ✅ FREE SHIPPING
  const shipping = 0;
  const total = subTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      {/* Header */}
      <div>
        <div className="mb-4">
          <BackButton />
        </div>

        <p className="text-xs opacity-70 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          •{" "}
          <Link href="/cart" className="hover:underline">
            Cart
          </Link>
        </p>

        <h1 className="sm:text-3xl text-2xl font-bold text-center text-[#063c71] mb-10">
          Cart
        </h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-7 bg-[#063c71] text-white p-4 text-sm font-semibold">
        <p className="col-span-2">GEAR</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SHIPPING</p>
        <p>SUBTOTAL</p>
        <p>ACTION</p>
      </div>

      {/* Cart Items */}
      {cart.map((item) => (
        <CartItem
          key={`${item.id}-${item.selectedSize}`}
          item={item}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeFromCart={removeFromCart}
        />
      ))}

      {/* Summary */}
      <div className="grid lg:grid-cols-2 gap-10 mt-12">
        <div className="bg-gray-50 p-6 rounded-lg h-fit mb-20">
          <div className="flex text-sm justify-between mb-3">
            <p>Sub Total</p>
            <p>{formatPrice(subTotal)}</p>
          </div>

          {/* ✅ FREE SHIPPING DISPLAY */}
          <div className="flex text-sm justify-between mb-3">
            <p>Shipping</p>
            <p className="text-green-600 font-medium">FREE</p>
          </div>

          {/* Total */}
          <div className="flex justify-between font-semibold text-lg mt-6">
            <p>Total</p>
            <p>{formatPrice(total)}</p>
          </div>

          {/* CTA */}
          <Link href={checkoutHref}>
            <button className="w-full bg-[#063c71] text-white text-sm py-3 mt-6 rounded-md cursor-pointer">
              Proceed To Checkout
            </button>
          </Link>

          {/* 🔥 Conversion Booster */}
          <p className="text-xs text-green-600 font-medium text-center mt-2">
            Free delivery on all orders for early users 🚚
          </p>

          <Link href="/shop">
            <button className="w-full border border-[#063c71] text-[#063c71] text-sm py-3 mt-3 rounded-md cursor-pointer flex items-center justify-center">
              Add More Gears
              <Plus className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>

      <Features />
    </div>
  );
}
