import { Footer } from "@/components/footer/footer";
import { Nav } from "@/components/hero/nav";
import { RadialBlur } from "@/components/pricing/radial-blur";

export default function TermsAndConditions() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col justify-between">
      <div className="isolate flex w-full flex-col p-8">
        <RadialBlur />
        <Nav />
        <h1 className="mt-20 text-center text-4xl font-medium tracking-tight sm:text-5xl">Terms and Conditions</h1>
      </div>
      <Footer />
    </div>
  );
}
