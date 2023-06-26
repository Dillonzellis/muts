import React from "react";
import List from "../(components)/List";
import HeroImg from "../(components)/inner-pages/HeroImg";
import InnerContent from "../(components)/inner-pages/InnerContent";
import RegSavings from "./RegSavings";

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
      <InnerContent
        order="contentFirst"
        variant="blue"
        ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
        ImgAlt="savings account">
        <h1>yes</h1>
      </InnerContent>
      <InnerContent
        order="imageFirst"
        variant="white"
        ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
        ImgAlt="savings account">
        <h1>yes</h1>
      </InnerContent>
      <InnerContent
        order="contentFirst"
        variant="green"
        ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
        ImgAlt="savings account">
        <h1>yes</h1>
      </InnerContent>
      <InnerContent
        order="imageFirst"
        variant="white"
        ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
        ImgAlt="savings account">
        <h1>yes</h1>
      </InnerContent>
      <InnerContent
        order="contentFirst"
        variant="grey"
        ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
        ImgAlt="savings account">
        <h1>yes</h1>
      </InnerContent>
      <InnerContent
        order="imageFirst"
        variant="white"
        ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
        ImgAlt="savings account">
        <h1>yes</h1>
      </InnerContent>
    </main>
  );
};

export default page;
