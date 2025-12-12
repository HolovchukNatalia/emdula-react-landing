import FAQItem from "./FaqItem";
import EmptyState from "../../ui/EmptyState.jsx";
import faqData from "../../data/faq-data.js";
import { filterValidItems, validators } from "../../utils/dataUtils";

function FAQ() {
  const validFaqItems = filterValidItems(faqData, validators.faqItem);
  const hasItems = validFaqItems.length > 0;

  return (
    <section className="w-full bg-(--secondary-1000) py-16">
      <div className="max-w-[1296px] mx-auto">
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

        {hasItems ? (
          <div>
            {validFaqItems.map((item, index) => (
              <FAQItem
                key={item.question || index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message="FAQ information is currently unavailable"
            className="text-(--white-1000)"
          />
        )}
      </div>
    </section>
  );
}

export default FAQ;
