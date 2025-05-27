import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";
import { Showcase } from "@/components/showcase";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Quote />
      <Features />
    </>
  );
}
