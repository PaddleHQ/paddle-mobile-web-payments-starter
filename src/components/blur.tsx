import { cn } from "@/lib/utils";

type BlurProps = {
  className?: string;
};

export function Blur({ className }: BlurProps) {
  return (
    <div className={cn("absolute isolate -z-1", className)}>
      <div className="relative h-[635px] w-1/2">
        <div className="bg-accent/50 absolute top-0 left-0 h-[635px] w-[820px] rounded-full blur-[80px]" />
        <div className="bg-accent/50 absolute top-0 left-[65px] h-[635px] w-[690px] rounded-full blur-[140px]" />
      </div>
    </div>
  );
}
