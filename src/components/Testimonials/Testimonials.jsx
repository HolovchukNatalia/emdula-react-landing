import TestimonialsColumn from "./TestimonialsColumn";
import { testimonials } from "../../data/testimonials-data.js";

function Testimonials() {
  const hasTestimonials =
    testimonials && Array.isArray(testimonials) && testimonials.length > 0;

  if (!hasTestimonials) {
    return (
      <section className="w-full bg-(--light-background) py-16">
        <div className="max-w-[1476px] mx-auto px-[90px] text-center">
          <p className="text-[18px] text-(--secondary-1000)">
            Testimonials are currently unavailable.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-(--light-background) ">
      <div className="max-w-[1476px] mx-auto px-[90px]">
        <div className="grid grid-cols-3 gap-6">
          <TestimonialsColumn testimonials={testimonials} direction="up" />
          <TestimonialsColumn testimonials={testimonials} direction="down" />
          <TestimonialsColumn testimonials={testimonials} direction="up" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
