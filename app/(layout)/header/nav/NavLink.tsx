"use client";

import { useState } from "react";
import SubMenu from "./SubMenu";
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
    }, 500); // 500ms delay
  };

  const cancelHideSubMenu = () => {
    clearTimeout(timeoutId);
  };

  return (
    <li
      className={`group relative text-lg font-light capitalize md:text-white h-full ${className}`}
      onMouseEnter={showSubMenu}
      onMouseLeave={hideSubMenu}>
      <a href={`/${link}`}>{text}</a>
      {subMenu && isSubMenuVisible && (
        <SubMenu
          items={subMenu}
          onMouseEnter={cancelHideSubMenu}
          onMouseLeave={hideSubMenu}
        />
      )}
    </li>
  );
};

export default NavLink;
