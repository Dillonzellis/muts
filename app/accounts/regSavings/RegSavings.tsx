import ContentBody from "@/app/(components)/inner-pages/ContentBody";
import ContentHeading from "@/app/(components)/inner-pages/ContentHeading";
import React from "react";
import Button from "../../(components)/Button";
import List from "../../(components)/List";
import InnerContent from "../../(components)/inner-pages/InnerContent";
import items from "./items";

const RegSavings = () => {
  return (
    <InnerContent
      order="imageFirst"
      variant="white"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div className="flex flex-col gap-3">
        <ContentHeading title="Regular Savings" />
      </div>
      <div className="flex flex-col gap-2">
        <ContentBody>
          Whether saving for a specific purchase or simply stashing more away
          for a rainy day, our dividend-earning savings accounts have you
          covered!
        </ContentBody>
      </div>
      <List liItems={items} />
      <div className="flex flex-col gap-2 lg:flex-row">
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </div>
    </InnerContent>
  );
};

export default RegSavings;
