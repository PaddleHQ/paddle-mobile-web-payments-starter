import { Nav } from "@/components/hero/nav";
import { Plans } from "@/components/pricing/plans";
import { RadialBlur } from "@/components/pricing/radial-blur";

export default function Pricing() {
  return (
    <div className="bg-card flex h-full min-h-screen w-full flex-col p-8">
      <RadialBlur className="-top-40 z-0 md:-top-0" />
      <Nav />
      <Plans />
    </div>
  );
}
