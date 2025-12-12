import FeatureRow from "./FeatureRow";
import EmptyState from "../../ui/EmptyState.jsx";
import { features } from "../../data/features";
import { filterValidItems, validators } from "../../utils/dataUtils";

function HowItWorks() {
  const validFeatures = filterValidItems(features, validators.feature);
  const hasFeatures = validFeatures.length > 0;

  return (
    <section className="w-full bg-(--secondary-1000) py-16">
      <div className="max-w-[1296px] mx-auto">
        <h2 className="text-center text-[48px] leading-[1.17] -tracking-[0.02em] font-medium text-(--white-1000) mb-10">
          How EmduIa works across your operations
        </h2>

        {hasFeatures ? (
          <div className="flex flex-col gap-12">
            {validFeatures.map((feature, index) => (
              <FeatureRow
                key={feature.title || index}
                title={feature.title}
                description={feature.description}
                items={feature.items || []}
                imagePosition={feature.imagePosition || "left"}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message="Features information is currently unavailable"
            className="text-(--white-1000)"
          />
        )}
      </div>
    </section>
  );
}

export default HowItWorks;
