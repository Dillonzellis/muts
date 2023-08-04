import Disclaimer from "@/app/components/Disclaimer";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import React from "react";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import items from "./items";

const CoverdaleAccounts = () => {
  return (
    <InnerContent
      sectionName="coverdale"
      order="contentFirst"
      variant="green"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="Coverdell Savings Accounts" />
      </div>
      <List liItems={items} />
      <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row">
        <Button btnText="Open an Account" link="#" variant="light" />
        <Button btnText="calculate savings" link="#" variant="light" />
      </div>
      <Disclaimer text="*The Credit Union provides no legal advice to members and provides the foregoing information from a reliable resource to give our members a basic understanding of these services. You should consult with your tax or legal advisor regarding any particular and the current status of applicable federal and state laws." />
    </InnerContent>
  );
};

export default CoverdaleAccounts;
