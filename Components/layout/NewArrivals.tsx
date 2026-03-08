import { ProductCard } from "./ProductCard";
import { newArrivals } from "@/data/newArrivals";

export function NewArrivals() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-heading font-bold text-[#063c71]">
              Relentless New Arrivals
            </h2>
          </div>

          <button className="text-sm font-medium text-text-[#063c71] hover:underline">
            Shop All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((item) => (
            <ProductCard
              key={item.id}
              name={item.name}
              brand={item.brand}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
