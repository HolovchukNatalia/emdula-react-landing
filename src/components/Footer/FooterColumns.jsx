import FooterColumn from "./FooterColumn";
import EmptyState from "../../ui/EmptyState.jsx";
import { footerMenu } from "../../data/footer-data.js";
import { filterValidItems, validators } from "../../utils/dataUtils";
import logo from "../../assets/icons/logo-name.svg";

function FooterColumns() {
  const validColumns = filterValidItems(footerMenu, validators.footerColumn);
  const hasColumns = validColumns.length > 0;

  return (
    <div className="max-w-[1296px] mx-auto pb-[50px] border-b border-(--white-250) flex">
      <div className="max-w-[413px]">
        <div className="mb-6">
          <img src={logo} alt="Emdula Logo" className="w-[197px]" />
        </div>

        <p className="text-[18px] text-(--grey-200) mb-10">
          We are a team of engineers and product builders creating AI-powered
          CRM and workflow systems for real-world businesses.
        </p>

        <p className="text-[20px] text-white font-semibold mb-1">Contact us</p>
        <a
          href="mailto:support@emdula.com"
          className="text-[18px] text-(--grey-200)"
        >
          support@emdula.com
        </a>
      </div>

      <div className="ml-auto flex gap-[140px]">
        {hasColumns ? (
          validColumns.map((col, index) => (
            <FooterColumn
              key={col.title || index}
              title={col.title}
              links={col.links}
            />
          ))
        ) : (
          <EmptyState
            message="Menu unavailable"
            className="text-(--grey-200)"
          />
        )}
      </div>
    </div>
  );
}

export default FooterColumns;
