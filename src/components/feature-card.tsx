import { cn } from "@/lib/utils";
import Image from "next/image";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

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

type FeatureCardProps = Feature & {
  isActive?: boolean;
};

export function FeatureCard({ image, ...props }: FeatureCardProps) {
  return (
    <div className="flex w-[var(--carousel-item-width)] flex-col items-center gap-5 px-2 py-6">
      <FeatureDetails {...props} />
      <div className="w-full rounded-lg border bg-white p-8 pb-0">
        <Image src={image} alt="App Image" width={304} height={445} />
      </div>
    </div>
  );
}
