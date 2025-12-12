import FooterColumn from "./FooterColumn";
import { footerMenu } from "../../data/footer-data.js";
import logo from "../../assets/icons/logo-name.svg";

function FooterColumns() {
  const hasFooterMenu =
    footerMenu && Array.isArray(footerMenu) && footerMenu.length > 0;

  return (
    <div className="max-w-[1296px] mx-auto pb-[50px] border-b border-(--white-250) flex">
      <div className="max-w-[413px] ">
        <div className="mb-6">
          <img src={logo} alt="Emdula Logo" className="w-[197px]" />
        </div>

        <p className="text-[18px] text-(--grey-200) mb-10 ">
          We are a team of engineers and product builders creating AI-powered
          CRM and workflow systems for real-world businesses.
        </p>

        <p className="text-[20px] text-white font-semibold mb-1">Contact us</p>
        <p className="text-[18px] text-(--grey-200)">support@emdula.com</p>
      </div>

      <div className="ml-auto flex gap-[140px]">
        {hasFooterMenu ? (
          footerMenu.map((col, index) => {
            if (!col || !col.title || !Array.isArray(col.links)) {
              console.warn(`Invalid footer column at index ${index}:`, col);
              return null;
            }

            return (
              <FooterColumn
                key={col.title || index}
                title={col.title}
                links={col.links}
              />
            );
          })
        ) : (
          <div className="text-(--grey-200) text-[16px]">
            <p>Menu unavailable</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FooterColumns;
