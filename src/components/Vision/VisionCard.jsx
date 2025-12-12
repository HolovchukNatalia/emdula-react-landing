function VisionCard({ title, text, icon }) {
  if (!title || !text) {
    console.error("VisionCard: title and text are required");
    return null;
  }

  return (
    <div className=" bg-(--green-small-carts) rounded-2xl px-6 py-[34px] flex flex-col gap-2">
      <div className="w-10 h-10 rounded-lg bg-(--white-1000) flex items-center justify-center">
        {icon && (
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-5 h-5"
            onError={(e) => {
              console.error(`Failed to load icon for: ${title}`);
              e.target.style.display = "none";
            }}
          />
        )}
      </div>

      <h3 className="text-[20px] leading-[1.4] font-semibold text-(--secondary-1000)">
        {title}
      </h3>

      <p className="text-[16px] leading-[1.56] font-normal text-(--grey-300)">
        {text}
      </p>
    </div>
  );
}

export default VisionCard;
