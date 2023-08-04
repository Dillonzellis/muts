"use client";

import { useState } from "react";
// import SubMenu from "./SubMenu";
import type { NavItem } from "./data";

const NavLink = ({ text, link, className, subMenu }: NavItem) => {
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const showSubMenu = () => {
    setIsSubMenuVisible(true);
  };

  const hideSubMenu = () => {
    timeoutId = setTimeout(() => {
      setIsSubMenuVisible(false);
    }, 150);
  };

  const cancelHideSubMenu = () => {
    clearTimeout(timeoutId);
  };

  return (
    <li
      className={`tw-group tw-relative tw-text-lg tw-font-light tw-capitalize md:tw-text-white tw-h-full ${className}`}
      onMouseEnter={showSubMenu}
      onMouseLeave={hideSubMenu}>
      <a href={`/${link}`}>{text}</a>
      {/* {subMenu && isSubMenuVisible && ( */}
      {/*   <SubMenu */}
      {/*     items={subMenu} */}
      {/*     onMouseEnter={cancelHideSubMenu} */}
      {/*     onMouseLeave={hideSubMenu} */}
      {/*   /> */}
      {/* )} */}
    </li>
  );
};

export default NavLink;
