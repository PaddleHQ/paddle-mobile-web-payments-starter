import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type DesktopNavProps = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function DesktopNav({ items, className }: DesktopNavProps) {
  return (
    <nav className={cn("flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={86} height={26} />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-10">
          {items.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink href={item.href}>{item.label}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button>Get Started</Button>
    </nav>
  );
}
