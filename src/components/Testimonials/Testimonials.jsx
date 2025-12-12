import TestimonialsColumn from "./TestimonialsColumn";
import EmptyState from "../../ui/EmptyState.jsx";
import { testimonials } from "../../data/testimonials-data.js";
import { filterValidItems, validators } from "../../utils/dataUtils";

function Testimonials() {
  const validTestimonials = filterValidItems(
    testimonials,
    validators.testimonial
  );
  const hasTestimonials = validTestimonials.length > 0;

  if (!hasTestimonials) {
    return (
      <section className="w-full bg-(--light-background) py-16">
        <div className="max-w-[1476px] mx-auto px-[90px]">
          <EmptyState
            message="Testimonials are currently unavailable"
            className="text-[var(--secondary-1000)]"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-(--light-background)">
      <div className="max-w-[1476px] mx-auto px-[90px]">
        <div className="grid grid-cols-3 gap-6">
          <TestimonialsColumn testimonials={validTestimonials} direction="up" />
          <TestimonialsColumn
            testimonials={validTestimonials}
            direction="down"
          />
          <TestimonialsColumn testimonials={validTestimonials} direction="up" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
