function TrustCard({ icon, title, text }) {
  if (!title || !text) {
    console.error("TrustCard: title and text are required");
    return null;
  }

  return (
    <div className="bg-(--white-1000) rounded-lg px-[25px] py-[47px] flex flex-col ">
      {icon && (
        <div className="w-16 h-16 text-[var(--secondary-1000)] pb-5">
          <img
            src={icon}
            alt={`${title} icon`}
            onError={(e) => {
              console.error(`Failed to load icon for: ${title}`);
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      <h3 className=" pb-3 text-[19px] leading-[1.38] font-medium text-[var(--secondary-1000)]">
        {title}
      </h3>

      <p className="text-[15px] leading-[1.48] font-normal text-[var(--secondary-1000)]">
        {text}
      </p>
    </div>
  );
}

export default TrustCard;
