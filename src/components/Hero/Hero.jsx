import BenefitItem from "./BenefitItem";
import Button from "../../ui/Button/Button";
import { benefits } from "../../data/benefits";

function Hero() {
  const hasBenefits =
    benefits && Array.isArray(benefits) && benefits.length > 0;

  return (
    <section
      className="relative w-full 
    bg-[#050A14] bg-[linear-gradient(180deg,rgba(19,27,37,0)_0%,#063a3a_100%)]"
    >
      <div className="max-w-[1476px] h-full mx-auto px-[90px] pb-16 flex flex-col">
        <div className="py-20 flex flex-col items-center text-center">
          <h1 className="text-[72px] leading-[1.06] font-bold -tracking-[0.02em] text-center text-(--white-1000)">
            <span className="text-(--primary-200main)">
              Intelligent systems
            </span>
            <br />
            for real-world businesses
          </h1>

          <p className="mt-6 pb-14 max-w-[600px] mx-auto text-[18px] leading-[1.56] font-normal text-center text-(--grey-200)">
            A new generation of AI-powered software for companies that are ready
            to move forward
          </p>

          <div className="mt-10 flex items-center justify-center gap-14">
            <Button size="md" variant="primary">
              Get started
            </Button>
            <Button size="md" variant="outline">
              Explore RealECon
            </Button>
          </div>
        </div>

        <div className="bg-(--primary-200main) rounded-t-[100px] rounded-b-[20px] py-7 flex flex-col justify-center">
          <h2 className="mb-[18px] text-center text-[32px] leading-tight font-semibold text-(--white-1000)">
            Benefit of improving your business
          </h2>

          {hasBenefits ? (
            <div className="grid grid-cols-4 px-[68px]">
              {benefits.map((benefit, index) => {
                if (!benefit || !benefit.title || !benefit.icon) {
                  console.warn(
                    `Invalid benefit data at index ${index}:`,
                    benefit
                  );
                  return null;
                }

                return (
                  <BenefitItem
                    key={benefit.title || index}
                    title={benefit.title}
                    icon={benefit.icon}
                  />
                );
              })}
            </div>
          ) : (
            <div className="px-[68px] py-8 text-center text-(--white-1000)">
              <p>Benefits information is currently unavailable.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
