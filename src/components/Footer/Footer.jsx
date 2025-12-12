import FooterTop from "./FooterTop";
import FooterColumns from "./FooterColumns";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer id="contact" className="w-full bg-(--secondary-1000) pt-16 pb-8">
      <div className="max-w-[1296px] mx-auto ">
        <FooterTop />

        <div className="mt-12">
          <FooterColumns />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
