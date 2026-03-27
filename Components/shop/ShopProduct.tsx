import { ShopCard } from "@/Components/layout/ShopCard";

export default function ShopProduct({ products }: any) {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-10">
      <h2 className="text-sm font-semibold mb-4">({products.length} items)</h2>

      {products.length === 0 ? (
        <div className="text-center py-20 text-gray-400">No products found</div>
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
