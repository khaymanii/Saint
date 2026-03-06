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
            <h2 className="text-3xl font-heading font-bold text-[#063c71]">
              Featured Products
            </h2>
          </div>

          {/* View All Button */}
          <button className="text-sm font-medium text-text-[#063c71] hover:underline">
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
