import IconFallback from "../../ui/IconFallback";
import CheckIcon from "../../assets/icons/check.svg";
import { isValidArray, isValidString } from "../../utils/dataUtils";

function FeatureRow({
  title,
  description,
  items = [],
  imagePosition = "left",
}) {
  const isValid = title && description;
  const validItems = prepareItems(items);
  const hasItems = validItems.length > 0;
  const displayImagePosition = imagePosition === "right" ? "right" : "left";

  if (!isValid) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 bg-(--secondary-1000) overflow-hidden">
      {displayImagePosition === "left" && <ImagePlaceholder />}

      <ContentSection
        title={title}
        description={description}
        items={validItems}
        hasItems={hasItems}
        position={displayImagePosition}
      />

      {displayImagePosition === "right" && <ImagePlaceholder />}
    </div>
  );
}

function prepareItems(items) {
  if (!isValidArray(items)) {
    return [];
  }

  return items.filter(
    (item) => item != null && isValidString(item) && item.trim() !== ""
  );
}

function ImagePlaceholder() {
  return (
    <div className="bg-(--primary-200main) flex items-center justify-center">
      <div className="w-[478px] h-[329px] bg-[#0B8F63]" />
    </div>
  );
}

function ContentSection({ title, description, items, hasItems, position }) {
  return (
    <div
      className={`
        p-[50px] flex flex-col justify-center bg-[#0e3e41]
        ${position === "left" ? "rounded-r-[20px]" : "rounded-l-[20px]"}
      `}
    >
      <h3 className="mb-4 text-[32px] leading-[1.19] font-normal text-(--white-1000)">
        {title}
      </h3>

      <p className="mb-6 text-[16px] font-normal text-(--grey-200)">
        {description}
      </p>

      {hasItems ? (
        <ul className="flex flex-col gap-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-[16px] font-normal text-(--white-1000)"
            >
              <IconFallback
                src={CheckIcon}
                alt="Check"
                className="w-6 h-6 mt-0.5 shrink-0"
              />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[14px] text-(--grey-200) italic">
          No items available
        </p>
      )}
    </div>
  );
}

export default FeatureRow;
