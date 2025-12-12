import { isValidString, isValidArray } from "../../utils/dataUtils";

function FooterColumn({ title, links = [] }) {
  const isValid = isValidString(title);
  const validLinks = prepareLinks(links);
  const hasLinks = validLinks.length > 0;

  if (!isValid) {
    return null;
  }

  return (
    <div>
      <h4 className="text-[20px] font-semibold text-(--white-1000) mb-6">
        {title}
      </h4>

      {hasLinks ? (
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

function prepareLinks(links) {
  if (!isValidArray(links)) {
    return [];
  }

  return links.filter((link) => isValidString(link));
}

export default FooterColumn;
