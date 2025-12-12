import CheckIcon from "../../assets/icons/check.svg";

function FeatureRow({
  title,
  description,
  items = [],
  imagePosition = "left",
}) {
  if (!title || !description) {
    console.error("FeatureRow: title and description are required");
    return null;
  }

  const hasItems = items && Array.isArray(items) && items.length > 0;

  return (
    <div className="grid grid-cols-2 bg-(--secondary-1000) overflow-hidden">
      {imagePosition === "left" && (
        <div className="bg-(--primary-200main) flex items-center justify-center">
          <div className="w-[478px] h-[329px] bg-[#0B8F63] " />
        </div>
      )}

      <div
        className={`
          p-[50px] flex flex-col justify-center bg-[#0e3e41]
          ${imagePosition === "left" ? "rounded-r-[20px]" : "rounded-l-[20px]"}
        `}
      >
        <h3 className=" mb-4 text-[32px] leading-[1.19] font-normal text-(--white-1000)">
          {title}
        </h3>

        <p className="mb-6 text-[16px] font-normal text-(--grey-200)">
          {description}
        </p>

        {hasItems ? (
          <ul className="flex flex-col gap-4">
            {items.map((item, index) => {
              if (!item || typeof item !== "string") {
                console.warn(`Invalid item at index ${index}:`, item);
                return null;
              }

              return (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[16px] font-normal text-(--white-1000)"
                >
                  <img
                    src={CheckIcon}
                    alt=""
                    className="w-6 h-6 mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-[14px] text-(--grey-200) italic">
            No items available
          </p>
        )}
      </div>

      {imagePosition === "right" && (
        <div className="bg-(--primary-200main) flex items-center justify-center">
          <div className="w-[478px] h-[329px] bg-[#0B8F63] " />
        </div>
      )}
    </div>
  );
}

export default FeatureRow;
