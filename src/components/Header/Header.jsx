import logo from "../../assets/icons/icon.svg";
import Button from "../../ui/Button/Button";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[85px] bg-[#090D17] backdrop-blur-[6px] shadow-[0_20px_14px_rgba(21,20,24,0.4)] text-white">
      <div className="max-w-[1476px] h-full mx-auto flex items-center justify-between px-[90px]">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[52px] h-[85px] object-contain"
          />
        </a>

        <nav className="flex items-center gap-9 text-gray-300">
          <a
            href="#products"
            className="font-normal text-[12px] leading-4 hover:text-white transition"
          >
            Products
          </a>

          <a
            href="#about-us"
            className="font-normal text-[12px] leading-4 hover:text-white transition"
          >
            About Us
          </a>

          <a
            href="#security"
            className="font-normal text-[12px] leading-4 hover:text-white transition"
          >
            Data & security
          </a>

          <a
            href="#teams"
            className="font-normal text-[12px] leading-4 hover:text-white transition"
          >
            Teams
          </a>

          <a
            href="#contact"
            className="font-normal text-[12px] leading-4 hover:text-white transition"
          >
            Contact
          </a>
        </nav>

        <Button size="sm" variant="primary">
          Get started
        </Button>
      </div>
    </header>
  );
}

export default Header;
