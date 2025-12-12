import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialsColumn({ testimonials = [], direction = "up" }) {
  const [isPaused, setIsPaused] = useState(false);

  const validTestimonials =
    testimonials && Array.isArray(testimonials)
      ? testimonials.filter(
          (item) => item && item.text && item.name && item.role
        )
      : [];

  if (validTestimonials.length === 0) {
    return (
      <div className="relative max-h-[800px] overflow-hidden flex items-center justify-center">
        <p className="text-(--grey-400) text-[16px]">
          No testimonials available
        </p>
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
        className={`
          flex flex-col gap-10
          ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}
        `}
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
