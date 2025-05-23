import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export function Wreath({ children, className }: Props) {
  return (
    <div className={"grid w-min grid-cols-[1fr_60px_1fr] md:grid-cols-[1fr_115px_1fr]"}>
      <Branch className="w-[19px] md:w-[43px]" />
      <div className={cn("-mx-2.5 mt-1 flex flex-col items-center md:-mt-2.5", className)}>{children}</div>
      <Branch className="w-[19px] rotate-y-180 md:w-[43px]" />
    </div>
  );
}

function Branch({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="81"
      viewBox="0 0 43 81"
      fill="none"
      className={className}
    >
      <g opacity="0.5">
        <path
          d="M23.7246 0.189941C23.5062 3.02901 21.2349 9.82093 13.8971 14.2761C13.2419 11.2186 14.2902 4.12096 23.7246 0.189941Z"
          fill="url(#paint0_linear_142_1755)"
        />
        <path
          d="M9.96603 30.9829C15.4695 30.7208 19.2476 24.9772 20.4487 22.1381C14.6833 21.0898 10.7304 26.5059 9.63845 29.0174C9.63845 23.2519 5.37985 19.1899 3.08676 18.2071C2.104 22.7933 3.08676 31.3105 9.96603 30.9829Z"
          fill="url(#paint1_linear_142_1755)"
        />
        <path
          d="M1.44806 29.345C6.42735 31.4415 9.41929 36.7702 10.2929 39.1725C10.2929 33.9312 15.7526 30.8737 18.4825 30.0001C18.9192 34.0404 14.8798 41.138 10.2929 41.138C2.65233 41.138 1.22967 32.9484 1.44806 29.345Z"
          fill="url(#paint2_linear_142_1755)"
        />
        <path
          d="M0.466606 40.1551C6.69019 39.8277 11.604 45.7242 12.9148 48.6723C12.1301 40.1836 19.7945 37.8621 19.7945 37.8621C21.625 41.4902 19.1384 49.3276 14.0641 50.8112C5.31409 53.3695 1.53014 43.6049 0.466606 40.1551Z"
          fill="url(#paint3_linear_142_1755)"
        />
        <path
          d="M3.08678 52.2759C9.31087 50.9656 16.0127 55.8371 18.2258 58.1848C14.6743 50.4349 22.4145 46.0518 22.4145 46.0518C25.3432 48.869 24.3153 56.7421 20.0186 59.8224C12.6095 65.1339 3.74193 55.5518 3.08678 52.2759Z"
          fill="url(#paint4_linear_142_1755)"
        />
        <path
          d="M9.31097 63.7414C17.1729 60.4655 24.1829 66.1015 27.0009 67.6725C20.4492 59.1553 27.3285 53.5864 27.3285 53.5864C30.9704 55.3894 32.7896 64.0952 29.6216 68.3277C24.159 75.6261 10.6212 68 9.31097 63.7414Z"
          fill="url(#paint5_linear_142_1755)"
        />
        <path
          d="M19.1384 75.449C26.0118 70.4193 36.5332 74.5833 39.6412 75.449C28.9661 68.3276 34.8627 60.1379 34.8627 60.1379C39.1213 62.7587 44.4285 70.613 42.3425 75.4708C38.7454 83.8474 21.4116 79.281 19.1384 75.449Z"
          fill="url(#paint6_linear_142_1755)"
        />
        <path
          d="M8.32824 7.06922C11.473 8.90369 12.0409 16.1324 11.9317 19.5174C14.8145 14.014 20.9948 13.7301 23.7246 14.2761C22.1959 18.2071 15.2074 23.1209 10.9488 21.1554C4.29797 18.0858 6.47188 10.1267 8.32824 7.06922Z"
          fill="url(#paint7_linear_142_1755)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_142_1755"
          x1="21.6388"
          y1="0.189941"
          x2="21.6388"
          y2="80.1899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_142_1755"
          x1="21.6388"
          y1="0.189941"
          x2="21.6388"
          y2="80.1899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_142_1755"
          x1="21.6388"
          y1="0.189941"
          x2="21.6388"
          y2="80.1899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_142_1755"
          x1="21.6388"
          y1="0.189941"
          x2="21.6388"
          y2="80.1899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_142_1755"
          x1="21.6388"
          y1="0.189941"
          x2="21.6388"
          y2="80.1899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_142_1755"
          x1="21.6388"
          y1="0.189941"
          x2="21.6388"
          y2="80.1899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_142_1755"
          x1="21.6388"
          y1="0.189941"
          x2="21.6388"
          y2="80.1899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_142_1755"
          x1="21.6388"
          y1="0.189941"
          x2="21.6388"
          y2="80.1899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
