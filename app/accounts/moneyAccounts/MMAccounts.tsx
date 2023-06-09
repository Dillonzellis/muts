import ContentBody from "@/app/(components)/inner-pages/ContentBody";
import ContentHeading from "@/app/(components)/inner-pages/ContentHeading";
import React from "react";
import Button from "../../(components)/Button";
import List from "../../(components)/List";
import InnerContent from "../../(components)/inner-pages/InnerContent";
import items from "./items";

const MMAccounts = () => {
  return (
    <InnerContent
      order="contentFirst"
      variant="blue"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div className="flex flex-col gap-3">
        <ContentHeading title="Money Market Accounts" />
      </div>
      <div className="flex flex-col gap-2">
        <ContentBody>
          Is it savings? Is it checking? It’s actually both! Earn more money &
          convenience with a money market account.
        </ContentBody>
        <List liItems={items} />
      </div>
      <div className="flex flex-col gap-2 lg:flex-row">
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </div>
    </InnerContent>
  );
};

export default MMAccounts;
