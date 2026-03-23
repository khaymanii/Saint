"use client";

import CartItem from "@/Components/cart/CartItem";
import Link from "next/link";
import { Features } from "@/Components/layout/Features";
import { useCartStore } from "@/store/useCartStore";
import EmptyCart from "@/Components/cart/EmptyCart";
import { useAuthStore } from "@/store/useAuthStore";
import { getProtectedRoute } from "@/lib/getProtectedRoute";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const user = useAuthStore((state) => state.user);
  const checkoutHref = getProtectedRoute(user, "/checkout");

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  //const shipping = cart.reduce((acc, item) => acc + item.shipping, 0);

  //const total = subTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 text-center">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <div>
        <p className="text-xs opacity-70 mb-3">Home • Cart</p>
        <h1 className="sm:text-3xl text-2xl font-bold text-center text-[#063c71] mb-10">
          Cart
        </h1>
      </div>
      {/* Desktop Table Header */}
      <div className="hidden md:grid grid-cols-7 bg-[#063c71] text-white p-4 text-sm font-semibold">
        <p className="col-span-2">PRODUCT DETAILS</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SHIPPING</p>
        <p>SUBTOTAL</p>
        <p>ACTION</p>
      </div>

      {/* Cart Items */}
      {cart.map((item) => (
        <CartItem
          key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
          item={item}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeFromCart={removeFromCart}
        />
      ))}

      <div className="grid lg:grid-cols-2 gap-10 mt-12">
        {/*<div>
          <h3 className="font-semibold mb-2">Discount Codes</h3>

          <p className="text-sm text-gray-500 mb-4">
            Enter your coupon code if you have one
          </p>

          <div className="flex flex-col sm:flex-row">
            <input
              className="border w-full p-3 sm:rounded-l-md rounded-md mb-3 sm:mb-0 text-xs"
              placeholder="Coupon code"
            />

            <button className="bg-[#063c71] text-white px-6 py-3 text-xs sm:rounded-r-md rounded-md cursor-pointer">
              Apply Coupon
            </button>
          </div>
          <Link href="/shop">
            <button className="mt-6 text-sm border px-6 py-3 rounded-md w-full sm:w-auto cursor-pointer hover:bg-[#063c71] hover:text-white transition">
              Continue Shopping
            </button>
          </Link>
        </div>*/}

        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <div className="flex text-sm justify-between mb-3">
            <p>Sub Total</p>
            <p>${subTotal}</p>
          </div>

          {/* <div className="flex text-sm justify-between mb-3">
            <p>Shipping</p>
            <p>${shipping}</p>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-6">
            <p>Grand Total</p>
            <p>${total}</p>
          </div>*/}

          <Link href={checkoutHref}>
            <button className="w-full bg-[#063c71] text-white text-sm py-3 mt-6 rounded-md cursor-pointer">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>

      <Features />
    </div>
  );
}
