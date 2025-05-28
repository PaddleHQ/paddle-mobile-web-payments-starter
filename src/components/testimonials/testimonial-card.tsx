import type { Testimonial } from "./testimonials";
import { Star } from "@/components/star";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-auto w-[340px] flex-col gap-2 rounded-xl bg-white p-6 shadow-md">
      <div className="mb-1 text-lg font-semibold">{testimonial.title}</div>
      <div className="mb-2 flex items-center gap-px">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400" />
        ))}
        <span className="text-muted-foreground pl-1 text-xs">{testimonial.date}</span>
        <span className="text-muted-foreground text-xs">• {testimonial.name}</span>
      </div>
      <div className="text-muted-foreground text-sm text-wrap">{testimonial.content}</div>
    </div>
  );
}
