import { MobileNav } from "./mobile-nav";

const navItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Legal",
    href: "/terms-and-conditions",
  },
];

export function Nav() {
  return (
    <>
      <MobileNav items={navItems} />
    </>
  );
}
