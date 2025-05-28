import type { Feature } from "@/components/features/features";
import { cn } from "@/lib/utils";

type FeatureDetailsProps = Omit<Feature, "image"> & {
  isActive?: boolean;
};

export function FeatureDetails({ icon, title, description, isActive }: FeatureDetailsProps) {
  return (
    <>
      <div
        className={cn(
          "w-fit rounded-sm bg-[var(--icon-bg)] p-3 text-[var(--icon-text)] transition-colors",
          isActive && "[--icon-bg:var(--foreground)] [--icon-text:var(--background)]",
        )}
      >
        {icon}
      </div>
      <div className="text-center">
        <p className="mb-2 text-base font-medium">{title}</p>
        <p className="text-muted-foreground text-sm text-wrap">{description}</p>
      </div>
    </>
  );
}
