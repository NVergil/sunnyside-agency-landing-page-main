import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "../assets/icon-instagram.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg";

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="content">
        <Logo className="logo" />
        <div className="footer-links">
          <a href="#about" className="links">
            About
          </a>
          <a href="#services" className="links">
            Services
          </a>
          <a href="#projects" className="links">
            Projects
          </a>
        </div>
        <div className="socials-container">
          <Facebook />
          <Instagram />
          <Twitter />
          <Pinterest />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
