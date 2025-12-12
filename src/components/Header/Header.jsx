import logo from "../../assets/icons/icon.svg";
import Button from "../../ui/Button/Button";
import { headerMenu } from "../../data/header-menu";
import { filterValidItems, validators } from "../../utils/dataUtils";

function Header() {
  const validMenu = filterValidItems(headerMenu, validators.headerMenuItem);

  const hasMenu = validMenu.length > 0;

  return (
    <header className="sticky top-0 z-50 w-full h-[85px] bg-[#090D17] backdrop-blur-[6px] shadow-[0_20px_14px_rgba(21,20,24,0.4)] text-white">
      <div className="max-w-[1476px] h-full mx-auto flex items-center justify-between px-[90px]">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Emdula logo"
            className="w-[52px] h-[85px] object-contain"
          />
        </a>

        {hasMenu && (
          <nav className="flex items-center gap-9 text-gray-300">
            {validMenu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-normal text-[12px] leading-4 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <Button size="sm" variant="primary">
          Get started
        </Button>
      </div>
    </header>
  );
}

export default Header;
