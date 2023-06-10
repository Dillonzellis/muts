import type { NavItem } from "./data";

const NavLink = ({ text, link, className }: NavItem) => {
  return (
    <li className={`text-lg font-light capitalize md:text-white ${className}`}>
      <a href={`/${link}`}>{text}</a>
    </li>
  );
};

export default NavLink;
