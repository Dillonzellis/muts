/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/app/(components)/Button";
import { Bars3Icon } from "@heroicons/react/24/solid";
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
    <div className="bg-white">
      <Container>
        <div className="flex items-center justify-between gap-4 py-2">
          <a href="#">
            <img
              src="http://dev2.growthbydesign.org/wp-content/uploads/Logo.png"
              alt="logo"
              width={260}
              height={65}
            />
          </a>
          <Bars3Icon
            onClick={handleNavToggle}
            className="h-10 w-10 text-brandingBlue-400 md:hidden"
          />
          <Button
            btnText="LOGIN"
            link="#"
            className="hidden font-bold md:flex"
          />
        </div>
      </Container>
      <nav className="relative">
        <ul
          className={`bg-brandingBlue-400 text-white py-4 w-full z-50 text-center justify-center gap-24 md:flex absolute w-f ${
            !toggle ? "hidden" : ""
          }`}>
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              link={item.link}
              text={item.text}
              className={item.className ? item.className : ""}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainBar;
