import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <Nav />
      <div className="flex flex-col items-center gap-6">
        <h1 className="mt-16 text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Meet the App<span className="text-foreground/40 block">That Does It All.</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Powerful, intuitive, and ready to make your life easier, start using Acme App today.
        </p>
        <Button className="mb-10 w-fit rounded-full" size="lg">
          Get Started
        </Button>
        <Image src="/app-image-1.png" alt="Hero" width={304} height={445} />
      </div>
    </div>
  );
}
