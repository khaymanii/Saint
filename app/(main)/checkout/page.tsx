import CheckoutForm from "@/Components/checkout/CheckoutForm";
import OrderSummary from "@/Components/checkout/OrderSummary";
import { Features } from "@/Components/layout/Features";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-xs text-gray-500 mb-3">Home • Checkout</p>
      <h2 className="text-center sm:text-3xl text-2xl text-[#063c71] font-bold mb-10">
        Checkout
      </h2>

      <div className="grid lg:grid-cols-2 gap-16">
        <CheckoutForm />

        <OrderSummary />
      </div>
      <Features />
    </div>
  );
}
