import Link from "next/link";
import { ShopCard } from "./ShopCard";
import { useProducts } from "@/hooks/useProducts";

export function FeaturedProduct() {
  const { products } = useProducts();

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="sm:text-3xl text-2xl font-bold text-[#063c71]">
              Featured Wears
            </h2>
          </div>
          <Link href="/shop">
            <button className="text-sm font-medium text-[#063c71] hover:underline cursor-pointer">
              View All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(8, 12).map((item) => (
            <ShopCard
              key={item.id}
              name={item.name}
              brand={item.brand}
              price={item.price}
              image={item.images}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
