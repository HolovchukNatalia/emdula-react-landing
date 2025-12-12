import TrustCard from "./TrustCard";
import EmptyState from "../../ui/EmptyState.jsx";
import { whyTrustItems } from "../../data/whyTrust";
import { filterValidItems, validators } from "../../utils/dataUtils";

function WhyTrust() {
  const validItems = filterValidItems(whyTrustItems, validators.trustItem);
  const hasItems = validItems.length > 0;

  return (
    <section id="security" className="w-full bg-(--light-background) py-16">
      <div className="max-w-[1476px] mx-auto px-[90px]">
        <h2 className="mb-10 text-center text-[48px] leading-[1.17] -tracking-[0.02em] font-medium text-[var(--secondary-1000)]">
          Why teams trust Emdula
        </h2>

        {hasItems ? (
          <div className="grid grid-cols-3 gap-6">
            {validItems.map((item, index) => (
              <TrustCard
                key={item.title || index}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message="Trust information is currently unavailable"
            className="text-[var(--secondary-1000)]"
          />
        )}
      </div>
    </section>
  );
}

export default WhyTrust;
