import Disclaimer from "@/app/(components)/Disclaimer";
import ContentBody from "@/app/(components)/inner-pages/ContentBody";
import ContentHeading from "@/app/(components)/inner-pages/ContentHeading";
import React from "react";
import Button from "../../(components)/Button";
import List from "../../(components)/List";
import InnerContent from "../../(components)/inner-pages/InnerContent";
import items from "./items";

const CoverdaleAccounts = () => {
  return (
    <InnerContent
      order="contentFirst"
      variant="grey"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div className="flex flex-col gap-3">
        <ContentHeading title="Coverdell Savings Accounts" />
      </div>
      <List liItems={items} />
      <div className="flex flex-col gap-2 lg:flex-row">
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </div>
      <Disclaimer text="*The Credit Union provides no legal advice to members and provides the foregoing information from a reliable resource to give our members a basic understanding of these services. You should consult with your tax or legal advisor regarding any particular and the current status of applicable federal and state laws." />
    </InnerContent>
  );
};

export default CoverdaleAccounts;
