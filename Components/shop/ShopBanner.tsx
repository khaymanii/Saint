import Image from "next/image";
import Link from "next/link";

export default function ShopBanner() {
  return (
    <section className="relative w-full h-80">
      <Image
        src="/images/boxing2.jpg"
        alt="Shop Banner"
        fill
        loading="eager"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
        <p className="text-xs opacity-70 mb-3">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          •{" "}
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
        </p>{" "}
        <h1 className="text-3xl font-bold mb-2">Shop</h1>
        <p className="text-sm opacity-80">Gear up for greatness</p>
      </div>
    </section>
  );
}
