import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/category";

export function Category() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="sm:text-3xl text-2xl text-[#063c71] font-bold">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group relative h-80 overflow-hidden rounded-xl"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-sm font-semibold font-heading">
                  {category.name}
                </h3>
                <p className="text-xs opacity-80 group-hover:translate-x-1 transition">
                  Shop Now →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
