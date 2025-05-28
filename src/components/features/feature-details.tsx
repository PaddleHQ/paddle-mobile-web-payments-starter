import type { Feature } from "@/components/features/features";
import { cn } from "@/lib/utils";

type FeatureDetailsProps = {
  feature: Feature;
  isActive: boolean;
};

export function FeatureDetails({ feature, isActive }: FeatureDetailsProps) {
  const { icon, title, description } = feature;

  return (
    <>
      <div
        className={cn(
          "bg-secondary text-foreground w-fit rounded-sm p-3 transition-colors",
          isActive && "bg-foreground text-background",
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
