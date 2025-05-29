import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
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
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </div>
        ),
        href: "#",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </div>
        ),
        href: "#",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            <span>Github</span>
          </div>
        ),
        href: "#",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
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
