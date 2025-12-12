import { useState } from "react";
import AcardionIcon from "../../assets/icons/accordion-icon.svg";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  if (!question || !answer) {
    console.error("FAQItem: question and answer are required");
    return null;
  }

  return (
    <div className="border-b border-(--white-250)">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left"
        aria-expanded={open}
        aria-controls={`faq-answer-${question.slice(0, 20)}`}
      >
        <span className="text-[16px] font-medium text-(--white-1000)">
          {question}
        </span>

        <img
          src={AcardionIcon}
          alt={open ? "Collapse" : "Expand"}
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
          onError={(e) => {
            console.error("Failed to load accordion icon");
            e.target.style.display = "none";
          }}
        />
      </button>

      {open && (
        <p
          id={`faq-answer-${question.slice(0, 20)}`}
          className="pb-5 text-[16px] text-[#b6b6b6]"
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default FAQItem;
