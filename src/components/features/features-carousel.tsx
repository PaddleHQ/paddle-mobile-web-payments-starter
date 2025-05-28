"use client";

import type { Feature } from "@/components/features/features";
import { FeatureCard } from "@/components/features/feature-card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  features: Feature[];
  className?: string;
};

export function FeaturesCarousel({ features, className }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={cn("w-[calc(100%+4rem)]", className)}>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem
              key={feature.title}
              className="basis-[var(--carousel-item-width)] [--carousel-item-width:240px]"
              onClick={() => {
                api?.scrollTo(index);
                setCurrent(index + 1);
              }}
            >
              <FeatureCard isActive={current === index + 1} {...feature} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
