import { Heart } from "lucide-react";
import Link from "next/link";

export default function EmptyWishlist() {
  return (
    <section className="w-full py-10 px-4">
      <div className="flex items-center justify-center">
        <div className="border rounded-xl p-8 text-center relative flex flex-col items-center justify-center shadow-md max-w-4xl bg-white">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-[#063c71] flex items-center justify-center">
              <Heart className="w-10 h-10 text-white animate-pulse" />
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Your wishlist is empty
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Discover amazing sports gear and save your favorites for later.
          </p>

          <Link href="/shop" className="inline-block">
            <button className="bg-[#063c71] text-white text-sm font-medium px-5 py-2 rounded-md hover:opacity-90 transition cursor-pointer">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
