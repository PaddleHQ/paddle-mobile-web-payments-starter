import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/hero/nav";
import { RadialBlur } from "@/components/pricing/radial-blur";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col justify-between">
      <div className="isolate flex w-full flex-col p-8">
        <RadialBlur />
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
}
