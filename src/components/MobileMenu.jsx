import { ReactComponent as HamburgerIcon } from "../assets/icon-hamburger.svg"
import { Dropdown } from "antd";
const items = [
  {
    key: "1",
    label: (
      <a
        href="#about"
      >
        About
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        href="#services"
      >
        Services
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        href="#projects"
      >
        Projects
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <button
      >
        contact
      </button>
    ),
  },
];
const MobileMenu = () => (
  <>
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow
    >
      <HamburgerIcon />
    </Dropdown>
  </>
);
export default MobileMenu;
