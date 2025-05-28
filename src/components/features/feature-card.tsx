import { FeatureDetails } from "@/components/features/feature-details";
import type { Feature } from "@/components/features/features";
import Image from "next/image";

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
