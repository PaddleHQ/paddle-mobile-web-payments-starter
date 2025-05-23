"use client";

import { Wreath } from "@/components/wreath";
import { Rating, RatingButton } from "@/components/ui/rating";
import { useIsMobile } from "@/hooks/use-mobile";

export function Showcase() {
  const isMobile = useIsMobile();

  return (
    <div className="relative mx-auto mt-12 mb-8 grid w-fit grid-cols-3 gap-8 md:my-24 md:gap-20">
      <Wreath>
        <p className="mb-0.5 text-[10px] md:text-base">Rating</p>
        <Rating value={4.5} readOnly>
          {Array.from({ length: 5 }).map((_, index) => (
            <RatingButton key={index} size={isMobile ? 10 : 20} />
          ))}
        </Rating>
        <p className="text-xl font-bold md:mt-1.5 md:text-3xl">4.9</p>
      </Wreath>
      <Wreath>
        <p className="text-[10px] md:text-base">Loved By</p>
        <p className="mt-1.5 text-center text-xs font-bold md:text-2xl">60 million people</p>
      </Wreath>
      <Wreath>
        <p className="text-[10px] md:text-base">Download By</p>
        <p className="mt-1.5 text-center text-xs font-bold text-balance md:text-2xl">
          100+
          <br />
          million
        </p>
      </Wreath>
    </div>
  );
}
