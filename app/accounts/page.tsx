import React from "react";
import List from "../(components)/List";
import HeroImg from "../(components)/inner-pages/HeroImg";
import InnerContent from "../(components)/inner-pages/InnerContent";
import MMAccounts from "./moneyAcounts/MMAccounts";
import RegSavings from "./regSavings/RegSavings";

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
      <RegSavings />
      <MMAccounts />
    </main>
  );
};

export default page;
