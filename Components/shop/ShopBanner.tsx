import Image from "next/image";

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
        <p className="text-xs opacity-70">Home • Shop</p>
        <h1 className="text-3xl font-bold">Shop</h1>
        <p className="text-sm opacity-80">Gear up for greatness</p>
      </div>
    </section>
  );
}
