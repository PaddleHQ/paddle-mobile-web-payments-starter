import { Skeleton } from "@/components/ui/skeleton";

export function ProductDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-3 px-3 -mt-1.5">
      <Skeleton className="h-12 w-full rounded-lg lg:bg-background" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32 lg:bg-background" />
        <Skeleton className="h-4 w-24 lg:bg-background" />
      </div>
      <Skeleton className="h-14 w-full rounded-lg lg:h-48 lg:bg-background" />
    </div>
  );
}
