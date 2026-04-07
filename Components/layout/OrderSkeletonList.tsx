import OrderCardSkeleton from "@/Components/ui/OrderCardSkeleton";

export default function OrdersSkeletonList() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 2 }).map((_, i) => (
        <OrderCardSkeleton key={i} />
      ))}
    </div>
  );
}
