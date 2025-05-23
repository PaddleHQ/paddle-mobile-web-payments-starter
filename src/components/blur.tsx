import React from "react";
import { cn } from "@/lib/utils";

interface BlurProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export const Blur: React.FC<BlurProps> = ({ className = "", width = 1440, height = 591 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1440 591"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none absolute top-0 left-0 -z-10 w-full", className)}
    >
      <mask
        id="mask0_142_1665"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="239"
        y="-1136"
        width="1845"
        height="1668"
      >
        <rect
          width="1201.93"
          height="1511.26"
          transform="matrix(0.361175 0.932498 0.932498 -0.361175 239.712 -589.426)"
          fill="url(#paint0_linear_142_1665)"
        />
      </mask>
      <g mask="url(#mask0_142_1665)">
        <g filter="url(#filter1_f_142_1665)">
          <ellipse
            cx="443.361"
            cy="343.199"
            rx="443.361"
            ry="343.199"
            transform="matrix(0.361175 0.932498 0.932498 -0.361175 871.93 -670.022)"
            fill="#2990FF"
          />
        </g>
        <g filter="url(#filter2_f_142_1665)">
          <ellipse
            cx="443.361"
            cy="344.672"
            rx="443.361"
            ry="344.672"
            transform="matrix(0.361175 0.932498 0.932498 -0.361175 825.225 -651.931)"
            fill="#2990FF"
          />
        </g>
        <g filter="url(#filter3_f_142_1665)">
          <ellipse
            cx="443.361"
            cy="343.199"
            rx="443.361"
            ry="343.199"
            transform="matrix(0.361175 0.932498 0.932498 -0.361175 690.621 -599.798)"
            fill="#2990FF"
          />
        </g>
        <g filter="url(#filter4_f_142_1665)">
          <ellipse
            cx="372.659"
            cy="343.199"
            rx="372.659"
            ry="343.199"
            transform="matrix(0.361175 0.932498 0.932498 -0.361175 532.105 -462.582)"
            fill="#2990FF"
          />
        </g>
      </g>
      <mask
        id="mask1_142_1665"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="-619"
        y="-1121"
        width="1785"
        height="1712"
      >
        <rect
          width="1113.39"
          height="1399.92"
          transform="matrix(0.565734 -0.824588 -0.824588 -0.565734 535.357 590.039)"
          fill="url(#paint1_linear_142_1665)"
        />
      </mask>
      <g mask="url(#mask1_142_1665)">
        <path
          d="M338.881 -712.973C151.846 -841.294 -103.8 -793.697 -232.121 -606.662C-360.442 -419.628 -312.845 -163.981 -125.81 -35.6602C61.2243 92.6608 64.8473 -127.845 193.168 -314.879C321.489 -501.914 525.916 -584.652 338.881 -712.973Z"
          fill="#2990FF"
        />
        <g filter="url(#filter5_f_142_1665)">
          <path
            d="M332.135 -717.609C187.354 -816.941 -34.0386 -745.844 -162.36 -558.809C-290.681 -371.774 -277.337 -139.628 -132.556 -40.2966C12.225 59.035 233.618 -12.0626 361.939 -199.097C490.26 -386.132 476.917 -618.278 332.135 -717.609Z"
            fill="#2990FF"
          />
        </g>
        <g filter="url(#filter6_f_142_1665)">
          <ellipse
            cx="410.698"
            cy="317.916"
            rx="410.698"
            ry="317.916"
            transform="matrix(0.565734 -0.824588 -0.824588 -0.565734 143.092 148.822)"
            fill="#2990FF"
          />
        </g>
        <g filter="url(#filter7_f_142_1665)">
          <ellipse
            cx="410.698"
            cy="319.28"
            rx="410.698"
            ry="319.28"
            transform="matrix(0.565734 -0.824588 -0.824588 -0.565734 181.345 175.065)"
            fill="#2990FF"
          />
        </g>
        <g filter="url(#filter8_f_142_1665)">
          <ellipse
            cx="410.698"
            cy="317.916"
            rx="410.698"
            ry="317.916"
            transform="matrix(0.565734 -0.824588 -0.824588 -0.565734 291.607 250.713)"
            fill="#2990FF"
          />
        </g>
        <g filter="url(#filter9_f_142_1665)">
          <ellipse
            cx="345.205"
            cy="317.916"
            rx="345.205"
            ry="317.916"
            transform="matrix(0.565734 -0.824588 -0.824588 -0.565734 479.423 300.147)"
            fill="#2990FF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_142_1665"
          x="1004.35"
          y="-824.939"
          width="728.442"
          height="876.025"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="3.14184" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter1_f_142_1665"
          x="972.164"
          y="-834.266"
          width="759.86"
          height="907.443"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="10.9964" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter2_f_142_1665"
          x="894.184"
          y="-848.279"
          width="825.156"
          height="970.587"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="26.7056" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter3_f_142_1665"
          x="696.599"
          y="-858.297"
          width="948.37"
          height="1095.95"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="58.124" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter4_f_142_1665"
          x="435.239"
          y="-812.303"
          width="1102.99"
          height="1146.54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="102.11" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter5_f_142_1665"
          x="-259.238"
          y="-771.211"
          width="718.055"
          height="784.515"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="4.36414" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter6_f_142_1665"
          x="-267.56"
          y="-783.769"
          width="761.697"
          height="828.157"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="15.2745" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter7_f_142_1665"
          x="-274.916"
          y="-802.301"
          width="850.666"
          height="916.164"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="37.0952" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter8_f_142_1665"
          x="-249.969"
          y="-812.802"
          width="1023.55"
          height="1090.01"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="80.7366" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <filter
          id="filter9_f_142_1665"
          x="-198.019"
          y="-784.784"
          width="1221.17"
          height="1240.85"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="141.835" result="effect1_foregroundBlur_142_1665" />
        </filter>
        <linearGradient
          id="paint0_linear_142_1665"
          x1="882.302"
          y1="1203.41"
          x2="882.303"
          y2="9.36231e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_142_1665"
          x1="817.302"
          y1="1114.75"
          x2="817.302"
          y2="8.67259e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Blur;
