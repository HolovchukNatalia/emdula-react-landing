import FeatureItem from "./FeatureItem";
import EmptyState from "../../ui/EmptyState.jsx";
import Mascot from "../../assets/images/mascot.png";
import Button from "../../ui/Button/Button";
import { howWeBuildItems } from "../../data/howWeBuild";
import { filterValidItems, validators } from "../../utils/dataUtils";

function HowWeBuild() {
  const validItems = filterValidItems(
    howWeBuildItems,
    validators.howWeBuildItem
  );
  const hasItems = validItems.length > 0;

  return (
    <section
      id="about-us"
      className="relative w-full bg-(--secondary-1000) py-16 overflow-hidden"
    >
      <div className="max-w-[1476px] mx-auto pl-[200px] relative">
        <div className="relative mb-16 text-center">
          <h2 className="text-[48px] leading-[1.17] -tracking-[0.02em] font-medium text-(--white-1000)">
            How EmduIa Builds Modern CRM Solutions
          </h2>
          <p className="mt-3 text-[16px] font-normal text-(--white-1000)">
            Practical, intelligent and built around real business needs.
          </p>
        </div>

        <div className="relative z-10 max-w-[738px]">
          <div className="bg-(--green-carts) backdrop-blur-sm rounded-[50px] px-8 py-16 w-[738px] h-[878px]">
            {hasItems ? (
              <div className="grid grid-cols-2 gap-8">
                {validItems.map((item) => (
                  <FeatureItem
                    key={item.number}
                    number={item.number}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                message="Content is currently unavailable"
                className="text-(--white-1000) h-full flex items-center justify-center"
              />
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="primary" size="md">
              Get started
            </Button>
          </div>
        </div>

        <img
          src={Mascot}
          alt="EmduIa mascot"
          className="absolute right-[-200px] bottom-[-140px] w-[1304px] h-[1304px] object-contain pointer-events-none"
        />
      </div>
    </section>
  );
}

export default HowWeBuild;
