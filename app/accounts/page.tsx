import React from "react";
import HeroImg from "../(components)/inner-pages/HeroImg";
import InnerHero from "../(components)/inner-pages/InnerHero";
import StandardSection from "../(components)/inner-pages/StandardSection";

const page = () => {
  return (
    <main>
      <HeroImg
        title="accounts"
        desc="Save & Earn Accounts"
        desc2="Dividend bearing accounts promote financial growth"
        btnText="Get Started"
        btnLink="#"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/account-hero.jpg"
        imgAlt="accounts"
      />
    </main>
  );
};

export default page;
