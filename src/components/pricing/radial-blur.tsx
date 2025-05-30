import { cn } from "@/lib/utils";

export function RadialBlur({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1440"
      height="625"
      viewBox="0 0 1440 625"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-accent pointer-events-none absolute top-0 left-0 -z-10 w-full", className)}
      {...props}
    >
      <g filter="url(#filter0_f_142_10082)">
        <ellipse cx="719.5" cy="-60.5" rx="545.5" ry="185.5" fill="#2990FF" />
      </g>
      <defs>
        <filter
          id="filter0_f_142_10082"
          x="-326"
          y="-746"
          width="2091"
          height="1371"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_142_10082" />
        </filter>
      </defs>
    </svg>
  );
}
