function FooterColumn({ title, links = [] }) {
  if (!title) {
    console.error("FooterColumn: title is required");
    return null;
  }

  const validLinks =
    links && Array.isArray(links)
      ? links.filter((link) => link && typeof link === "string")
      : [];

  return (
    <div>
      <h4 className="text-[20px] font-semibold text-(--white-1000) mb-6">
        {title}
      </h4>

      {validLinks.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {validLinks.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="text-[18px] text-(--grey-200) hover:text-white transition cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[16px] text-(--grey-200) italic">
          No links available
        </p>
      )}
    </div>
  );
}

export default FooterColumn;
