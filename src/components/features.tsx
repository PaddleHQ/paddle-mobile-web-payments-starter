import { FeaturesCarousel } from "@/components/features-carousel";
import { Badge } from "@/components/ui/badge";
import { SlidersIcon, ZapIcon, ActivityIcon, ChartNoAxesColumnIcon } from "lucide-react";

const features = [
  {
    icon: <SlidersIcon size={20} />,
    title: "Full Brand Control",
    description: "Make it yours—customize logos, colors, domains, and more.",
    image: "/app-image-1.png",
  },
  {
    icon: <ZapIcon size={20} />,
    title: "Fast, Native Performance",
    description: "Built with native tech for fast, smooth performance.",
    image: "/app-image-1.png",
  },
  {
    icon: <ActivityIcon size={20} />,
    title: "Push Notifications",
    description: "Engage users with real-time updates and alerts.",
    image: "/app-image-1.png",
  },
  {
    icon: <ChartNoAxesColumnIcon size={20} />,
    title: "Built-in Analytics",
    description: "Monitor activity and performance with live data.",
    image: "/app-image-1.png",
  },
];

export function Features() {
  return (
    <div className="flex w-full flex-col items-center gap-6 p-8">
      <Badge variant="secondary" className="uppercase">
        Features
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Discover our<span className="text-foreground/40 block">exceptional features</span>
      </h2>
      <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
        We&apos;ve built the ultimate white-label app platform so you can focus on growing your brand - not building
        tech
      </p>
      <FeaturesCarousel features={features} />
    </div>
  );
}
