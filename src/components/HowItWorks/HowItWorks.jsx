import FeatureRow from "./FeatureRow";
import { features } from "../../data/features";

function HowItWorks() {
  const hasFeatures =
    features && Array.isArray(features) && features.length > 0;

  return (
    <section className="w-full bg-(--secondary-1000) py-16">
      <div className="max-w-[1296px] mx-auto">
        <h2 className="text-center text-[48px] leading-[1.17] -tracking-[0.02em] font-medium text-(--white-1000) mb-10">
          How EmduIa works across your operations
        </h2>

        {hasFeatures ? (
          <div className="flex flex-col gap-12">
            {features.map((feature, index) => {
              if (!feature || !feature.title || !feature.description) {
                console.warn(
                  `Invalid feature data at index ${index}:`,
                  feature
                );
                return null;
              }

              return (
                <FeatureRow
                  key={feature.title || index}
                  title={feature.title}
                  description={feature.description}
                  items={feature.items || []}
                  imagePosition={feature.imagePosition || "left"}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center text-(--white-1000)">
            <p className="text-[18px]">
              Features information is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default HowItWorks;
