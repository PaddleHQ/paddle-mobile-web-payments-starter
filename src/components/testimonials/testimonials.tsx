import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "./testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Giana Herwitz",
    date: "May 4",
    title: "Title will be here",
    content: "Acme helped us launch our mobile app in days—not weeks. The customization options are top-notch.",
    rating: 5,
  },
  {
    name: "Hanna Gouse",
    date: "May 4",
    title: "Title will be here",
    content:
      "When I signed up with Acme it was a no-brainer. It's been one of the best decisions I've made to ensure my finances are on point.",
    rating: 5,
  },
  {
    name: "Kaiya Donin",
    date: "May 4",
    title: "Title will be here",
    content: "I love how easy it is to manage everything from the dashboard. Acme keeps it simple but powerful.",
    rating: 5,
  },
  {
    name: "Alex Bergwijn",
    date: "May 4",
    title: "Title will be here",
    content: "Acme made our brand shine—our app looks and feels like it was built just for us.",
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-8 py-14 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase">
        Testimonial
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Don&apos;t Take<div className="text-foreground/40">Our Word for It</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        We&apos;ve built the ultimate white-label app platform so you can focus on growing your brand—not building tech
      </p>
      <div className="relative w-[calc(100%+4rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}
