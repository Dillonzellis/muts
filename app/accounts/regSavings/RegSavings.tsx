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
        <h2 className="text-4xl font-bold text-brandingBlue-400">Savings</h2>
        <h3 className="text-2xl font-semibold">Regular Savings</h3>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          Whether saving for a specific purchase or simply stashing more away
          for a rainy day, our dividend-earning savings accounts have you
          covered!
        </div>
        <List liItems={items} />
      </div>
      <div className="flex flex-col gap-2 lg:flex-row">
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </div>
    </InnerContent>
  );
};

export default RegSavings;
