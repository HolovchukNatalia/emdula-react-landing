import TrustCard from "./TrustCard";
import { whyTrustItems } from "../../data/whyTrust";

function WhyTrust() {
  const hasItems =
    whyTrustItems && Array.isArray(whyTrustItems) && whyTrustItems.length > 0;

  return (
    <section id="security" className="w-full bg-(--light-background) py-16">
      <div className="max-w-[1476px] mx-auto px-[90px]">
        <h2 className="mb-10 text-center text-[48px] leading-[1.17] -tracking-[0.02em] font-medium text-(--secondary-1000)">
          Why teams trust Emdula
        </h2>

        {hasItems ? (
          <div className="grid grid-cols-3 gap-6">
            {whyTrustItems.map((item, index) => {
              if (!item || !item.title || !item.text) {
                console.warn(`Invalid whyTrustItem at index ${index}:`, item);
                return null;
              }

              return (
                <TrustCard
                  key={item.title || index}
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center text-(--secondary-1000)">
            <p className="text-[18px]">
              Trust information is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default WhyTrust;
