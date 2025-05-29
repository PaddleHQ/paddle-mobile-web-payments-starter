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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  return (
    <div className={cn("w-[calc(100%+3rem)]", className)}>
      <Carousel setApi={setCarouselApi}>
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem
              key={feature.title}
              className="basis-[var(--carousel-item-width)] [--carousel-item-width:240px]"
              onClick={() => {
                carouselApi?.scrollTo(index);
                setCurrent(index + 1);
              }}
            >
              <FeatureCard feature={feature} isActive={current === index + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
