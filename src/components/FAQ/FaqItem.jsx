import { useState } from "react";
import IconFallback from "../../ui/IconFallback";
import AcardionIcon from "../../assets/icons/accordion-icon.svg";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  const isValid = question && answer;
  const displayQuestion = question || "";
  const displayAnswer = answer || "";

  if (!isValid) {
    return null;
  }

  const questionId = `faq-answer-${displayQuestion
    .slice(0, 20)
    .replace(/\s/g, "-")}`;

  return (
    <div className="border-b border-(--white-250)">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left"
        aria-expanded={open}
        aria-controls={questionId}
      >
        <span className="text-[16px] font-medium text-(--white-1000)">
          {displayQuestion}
        </span>

        <IconFallback
          src={AcardionIcon}
          alt={open ? "Collapse" : "Expand"}
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <p id={questionId} className="pb-5 text-[16px] text-[#b6b6b6]">
          {displayAnswer}
        </p>
      )}
    </div>
  );
}

export default FAQItem;
