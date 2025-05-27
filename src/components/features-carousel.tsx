import { Feature } from "@/components/feature";
import { cn } from "@/lib/utils";

type Props = {
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
  }[];
  className?: string;
};

export function FeaturesCarousel({ features, className }: Props) {
  return (
    <div className={cn("w-[calc(100%+4rem)] overflow-x-scroll", className)}>
      <div className="mx-auto grid w-max grid-cols-4 gap-5 px-8">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
}
