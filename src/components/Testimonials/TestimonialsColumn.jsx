import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import EmptyState from "../../ui/EmptyState.jsx";
import { filterValidItems, validators } from "../../utils/dataUtils";

function TestimonialsColumn({ testimonials = [], direction = "up" }) {
  const [isPaused, setIsPaused] = useState(false);

  const validTestimonials = filterValidItems(
    testimonials,
    validators.testimonial
  );
  const hasTestimonials = validTestimonials.length > 0;
  const animationClass =
    direction === "up" ? "animate-scroll-up" : "animate-scroll-down";

  if (!hasTestimonials) {
    return (
      <div className="relative max-h-[800px] overflow-hidden flex items-center justify-center">
        <EmptyState
          message="No testimonials available"
          className="text-(--grey-400)"
        />
      </div>
    );
  }

  return (
    <div
      className="relative max-h-[800px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex flex-col gap-10 ${animationClass}`}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[...validTestimonials, ...validTestimonials].map((item, index) => (
          <TestimonialCard
            key={`${item.name}-${index}`}
            text={item.text}
            name={item.name}
            role={item.role}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsColumn;
