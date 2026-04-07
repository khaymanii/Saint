import { Skeleton } from "@/Components/ui/skeleton";

export default function OrderCardSkeleton() {
  return (
    <div className="border rounded-md p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-3 w-16" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-14 h-14 rounded-md" />

              <div className="space-y-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-3 w-16" />
                <Skeleton className="hidden sm:block h-3 w-20" />
              </div>
            </div>

            <Skeleton className="h-4 w-12" />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4 border-t pt-3">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="hidden sm:flex justify-between mt-3">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>

      <div className="mt-2">
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  );
}
