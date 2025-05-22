import { Blur } from "@/components/blur";

export function Hero() {
  return (
    <div className="relative z-1 grid place-items-center p-8">
      <Blur className="-top-70 -left-20 -rotate-45" />
      <Blur className="-top-140 right-120" />
      <h1 className="mt-16 text-center text-6xl font-bold">
        Meet the App<span className="text-foreground/40 block">That Does It All.</span>
      </h1>
    </div>
  );
}
