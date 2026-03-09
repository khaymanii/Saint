import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { product } from "@/data/product";

export function FeaturedProduct() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          {/* Title & Subtitle */}
          <div className="mb-4 md:mb-0">
            <h2 className="sm:text-3xl text-2xl font-bold text-[#063c71]">
              Featured Products
            </h2>
          </div>
          {/* View All Button */}
          <Link href="/shop">
            <button className="text-sm font-medium text-text-[#063c71] hover:underline cursor-pointer">
              View All
            </button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {product.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              brand={product.brand}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
