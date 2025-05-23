import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Pill, PillAvatar, PillAvatarGroup } from "@/components/ui/pill";
import Image from "next/image";
import { Blur } from "@/components/blur";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <Blur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6">
        <Pill>
          <PillAvatarGroup className="hidden sm:flex">
            <PillAvatar src="/avatars/1.jpg" />
            <PillAvatar src="/avatars/2.jpg" />
            <PillAvatar src="/avatars/3.jpg" />
            <PillAvatar src="/avatars/4.jpg" />
          </PillAvatarGroup>
          <p className="text-muted-foreground px-2 text-xs font-medium sm:border-l-1 sm:text-sm">
            Join <span className="text-foreground">3 Million</span> other users already on board
          </p>
        </Pill>
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Meet the App<span className="text-foreground/40 block">That Does It All.</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Powerful, intuitive, and ready to make your life easier, start using Acme App today.
        </p>
        <Button className="mb-10 w-fit" size="lg">
          Get Started
        </Button>
        <Image src="/app-image-1.png" alt="Hero" width={304} height={445} />
      </div>
    </div>
  );
}
