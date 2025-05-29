import { FooterBlur } from "@/components/footer/footer-blur";
import Link from "next/link";

const links = [
  {
    title: "Acme",
    links: [
      {
        label: "Download App",
        href: "#",
      },
      {
        label: "Features",
        href: "#",
      },
      {
        label: "Updates",
        href: "#",
      },
      {
        label: "Pricing",
        href: "#",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "For Android",
        href: "#",
      },
      {
        label: "For iPhone",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Terms & Conditions",
        href: "#",
      },
      {
        label: "Privacy Policy",
        href: "#",
      },
      {
        label: "Refund Policy",
        href: "#",
      },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        label: "Twitter",
        href: "#",
      },
      {
        label: "Linkedin",
        href: "#",
      },
      {
        label: "Github",
        href: "#",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 md:py-25">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col gap-8">
              {link.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
