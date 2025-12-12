import VisionCard from "./VisionCard";
import { visionItems } from "../../data/visionItems";

function Vision() {
  const hasItems = visionItems.length > 0;

  return (
    <section id="products" className="w-full bg-(--light-background) py-16">
      <div className="max-w-[1296px] mx-auto bg-[#F3F0F0] rounded-3xl px-10 py-10">
        <h2 className="mb-[68px] text-center text-[48px] leading-[1.2] font-semibold text-[var(--secondary-1000)]">
          Our vision and what we build
        </h2>

        {hasItems ? (
          <div className="grid grid-cols-3 gap-14">
            {visionItems.map(({ icon, title, text }) => (
              <VisionCard key={title} icon={icon} title={title} text={text} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-[18px] text-[var(--secondary-1000)]">
            Vision information is currently unavailable.
          </p>
        )}
      </div>
    </section>
  );
}

export default Vision;
