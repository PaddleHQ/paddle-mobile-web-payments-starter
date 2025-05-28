"use client";

import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import type { Testimonial } from "@/components/testimonials/testimonials";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Props = {
  testimonials: Testimonial[];
  reverse?: boolean;
  className?: string;
};

export function TestimonialMarquee({ testimonials, reverse, className }: Props) {
  return (
    <div className={cn("relative col-span-4 w-full", className)}>
      <div
        className={cn(
          "absolute top-0 right-0 bottom-0 left-0 z-10 h-[calc(100%+1rem)] w-full",
          "bg-linear-[90deg,var(--background),transparent_5%,transparent_95%,var(--background)]",
          "md:bg-linear-[90deg,var(--background),transparent_25%,transparent_75%,var(--background)]",
          "xl:bg-linear-[90deg,var(--background),transparent,var(--background)]",
        )}
      ></div>
      <InfiniteSlider speed={30} reverse={reverse}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </InfiniteSlider>
    </div>
  );
}
