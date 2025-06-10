import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function BackgroundBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-0 -z-10 h-full w-full bg-[url('/background-blur-mobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/background-blur-desktop.png')]",
        className,
      )}
    />
  );
}
