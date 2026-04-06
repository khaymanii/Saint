import ShopCardSkeleton from "@/Components/ui/ShopCardSkeleton";

export default function ShopSkeletonGrid() {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <ShopCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
