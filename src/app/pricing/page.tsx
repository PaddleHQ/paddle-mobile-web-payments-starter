import { Nav } from "@/components/hero/nav";
import { PlanSelect } from "@/components/pricing/plan-select";
import { RadialBlur } from "@/components/pricing/radial-blur";

export default function Pricing() {
  return (
    <div className="z-1 flex h-full min-h-screen w-full flex-col p-8">
      <RadialBlur className="-top-40 md:-top-0" />
      <Nav />
      <PlanSelect />
    </div>
  );
}
