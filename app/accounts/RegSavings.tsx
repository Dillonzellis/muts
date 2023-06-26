import React from "react";
import Button from "../(components)/Button";
import List from "../(components)/List";
import InnerContent from "../(components)/inner-pages/InnerContent";

const RegSavings = () => {
  const items: React.ReactNode[] = [
    <React.Fragment key="1">
      Establish membership with $5 minimum deposit{" "}
      <em>(Minimum $5 must remain in account)</em>
    </React.Fragment>,
    <React.Fragment key="2">
      <a href="#">Dividend-bearing</a>
    </React.Fragment>,
    <React.Fragment key="3">Up to 6 free withdrawals/month</React.Fragment>,
    <React.Fragment key="4">
      <a href="#">24/7 remote access</a>
    </React.Fragment>,
    <React.Fragment key="5">
      <a href="#">Direct deposit</a>
    </React.Fragment>,
    <React.Fragment key="6">
      <a href="#">Payroll deduction</a>
    </React.Fragment>,
  ];
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
