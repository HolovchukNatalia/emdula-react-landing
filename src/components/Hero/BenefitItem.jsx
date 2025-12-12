function BenefitItem({ title, icon }) {
  if (!title || !icon) {
    console.error("BenefitItem: title and icon are required");
    return null;
  }

  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="p-7 rounded-full bg-(--white-500) flex items-center justify-center">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12"
          onError={(e) => {
            console.error(`Failed to load icon for: ${title}`);
            e.target.style.display = "none";
          }}
        />
      </div>

      <p className="p-2.5 text-[24px] leading-[1.42] font-normal text-center text-(--white-1000)">
        {title}
      </p>
    </div>
  );
}

export default BenefitItem;
