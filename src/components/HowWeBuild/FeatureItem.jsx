function FeatureItem({ number, title, text }) {
  if (!number || !title || !text) {
    console.error("FeatureItem: number, title and text are required");
    return null;
  }

  return (
    <div className="w-[296px] h-[210px] flex flex-col items-center gap-4 text-center">
      <div
        className="w-16 h-16 rounded-full bg-(--primary-200main) flex items-center 
	  justify-center text-[32px] font-semibold text-(--white-1000) shadow-[0_0_30px_rgba(12,179,112,0.2)"
      >
        {number}
      </div>

      <h3 className="text-[20px] leading-[1.2] font-semibold text-(--white-1000)">
        {title}
      </h3>

      <p className="text-[16px] leading-normal font-normal text-(--white-1000)">
        {text}
      </p>
    </div>
  );
}

export default FeatureItem;
