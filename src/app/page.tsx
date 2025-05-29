import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features/features";
import { Hero } from "@/components/hero";
import { Quote } from "@/components/quote";
import { Showcase } from "@/components/showcase";
import { Testimonials } from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Quote />
      <Features />
      <Testimonials />
      <FAQs />
    </>
  );
}
