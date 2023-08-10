/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/app/components/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Container from "../Container";
import NavLink from "./nav/NavLink";
import { navItems } from "./nav/data";

const MainBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleNavToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="main-bar tw-bg-white">
      <Container>
        <div className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-py-2">
          <a href="/">
            <img
              src="http://dev2.growthbydesign.org/wp-content/uploads/Logo.png"
              alt="logo"
              width={260}
              height={65}
            />
          </a>
          {toggle ? (
            <XMarkIcon
              onClick={handleNavToggle}
              className="md:tw-hidden tw-h-10 tw-w-10 tw-text-brandingBlue-400"
            />
          ) : (
            <Bars3Icon
              onClick={handleNavToggle}
              className="tw-h-10 tw-w-10 tw-text-brandingBlue-400 md:tw-hidden"
            />
          )}

          <Button
            btnText="LOGIN"
            link="#"
            className="tw-hidden tw-font-bold md:tw-flex"
            arrow={true}
            selfStart={false}
          />
        </div>
      </Container>
      <nav className="tw-relative">
        <ul
          className={`tw-bg-brandingBlue-400 tw-text-white tw-py-4 tw-w-full tw-z-50 tw-text-center tw-justify-center tw-gap-24 md:tw-flex tw-absolute md:tw-relative tw-w-f ${!toggle ? "tw-hidden" : ""
            }`}>
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              link={item.link}
              text={item.text}
              className={item.className ? item.className : ""}
              subMenu={item.subMenu}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainBar;
