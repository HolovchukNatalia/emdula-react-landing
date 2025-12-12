import FAQItem from "./FaqItem";
import faqData from "../../data/faq-data.js";

function FAQ() {
  const hasFaqData = faqData && Array.isArray(faqData) && faqData.length > 0;

  return (
    <section className="w-full bg-(--secondary-1000) py-16">
      <div className="max-w-[1296px] mx-auto ">
        <h2
          className="
            mb-10
            text-center
            text-[48px]
            leading-[1.17]
            -tracking-[0.02em]
            font-medium
            text-(--white-1000)
          "
        >
          Frequently Asked Questions
        </h2>

        {hasFaqData ? (
          <div>
            {faqData.map((item, index) => {
              if (!item || !item.question || !item.answer) {
                console.warn(`Invalid FAQ item at index ${index}:`, item);
                return null;
              }

              return (
                <FAQItem
                  key={item.question || index}
                  question={item.question}
                  answer={item.answer}
                />
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center text-(--white-1000)">
            <p className="text-[18px]">
              FAQ information is currently unavailable.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQ;
