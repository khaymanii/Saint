import { ShopCard } from "@/Components/layout/ShopCard";
import ShopCardSkeleton from "../ui/ShopCardSkeleton";

export default function ShopProduct({ products, loading }: any) {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-10">
      <h2 className="text-sm font-semibold mb-4">
        ({loading ? "Loading products..." : `${products.length} Products`})
      </h2>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <ShopCardSkeleton key={i} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 text-gray-400">No gears found</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {products.map((p: any) => (
            <ShopCard
              key={p.id}
              name={p.name}
              brand={p.brand}
              price={p.price}
              image={p.images}
              id={p.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
