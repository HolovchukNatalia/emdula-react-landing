import IconFallback from "../../ui/IconFallback";

function BenefitItem({ title, icon }) {
  const isValid = title && icon;

  if (!isValid) {
    return null;
  }

  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="p-7 rounded-full bg-(--white-500) flex items-center justify-center">
        <IconFallback src={icon} alt={title} className="w-12 h-12" />
      </div>

      <p className="p-2.5 text-[24px] leading-[1.42] font-normal text-center text-(--white-1000)">
        {title}
      </p>
    </div>
  );
}

export default BenefitItem;
