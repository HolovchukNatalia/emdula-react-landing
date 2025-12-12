import VisionCard from "./VisionCard";
import EmptyState from "../../ui/EmptyState.jsx";
import { visionItems } from "../../data/visionItems";
import { filterValidItems, validators } from "../../utils/dataUtils";

function Vision() {
  const validItems = filterValidItems(visionItems, validators.visionItem);
  const hasItems = validItems.length > 0;

  return (
    <section id="products" className="w-full bg-(--light-background) py-16">
      <div className="max-w-[1296px] mx-auto bg-[#F3F0F0] rounded-3xl px-10 py-10">
        <h2 className="mb-[68px] text-center text-[48px] leading-[1.2] font-semibold text-(--secondary-1000)">
          Our vision and what we build
        </h2>

        {hasItems ? (
          <div className="grid grid-cols-3 gap-14">
            {validItems.map((item) => (
              <VisionCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message="Vision information is currently unavailable"
            className="text-(--secondary-1000)"
          />
        )}
      </div>
    </section>
  );
}

export default Vision;
