import { Nav } from "@/components/hero/nav";
import { Plans } from "@/components/pricing/plans";
import { RadialBlur } from "@/components/pricing/radial-blur";

export default function Pricing() {
  return (
    <div className="bg-card isolate flex h-full min-h-screen w-full flex-col p-8">
      <RadialBlur />
      <Nav />
      <Plans />
    </div>
  );
}
