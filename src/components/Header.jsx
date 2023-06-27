/* eslint-disable react/prop-types */
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as ArrowDown } from "../assets/icon-arrow-down.svg";
import MobileMenu from "./MobileMenu";

const Header = ({ menu }) => {
  return (
    <header>
      <nav className="navbar">
        <Logo className="logo" />
        {!menu ? (
          <div className="inner-nav_links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <button>contact</button>
          </div>
        ) : (
          <MobileMenu />
        )}
      </nav>
      <img
        src="/desktop/image-header.jpg"
        alt="img-header"
        className="header-background"
      />
      <h1 className="title">we are creatives</h1>
      <ArrowDown className="arrow" />
    </header>
  );
};

export default Header;
