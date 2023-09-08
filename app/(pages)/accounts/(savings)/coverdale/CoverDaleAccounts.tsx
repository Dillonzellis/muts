import Disclaimer from "@/app/components/Disclaimer";
import ButtonWrapper from "@/app/components/inner-pages/ButtonWrapper";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import React from "react";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import items from "./items";

const CoverdellAccounts = () => {
  return (
    <InnerContent
      id="coverdell-savings-accounts"
      sectionName="coverdale"
      order="contentFirst"
      variant="blue"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1389552770.jpg"
      ImgAlt="savings account"
      vertical
    >
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="Coverdell Savings Accounts" />
      </div>
      <List liItems={items} />
      <ButtonWrapper>
        <Button btnText="Open an Account" link="#" variant="light" />
        <Button
          variant="light"
          btnText="calculate savings"
          link="https://dev2.growthbydesign.org/financial-calculators/"
        />
      </ButtonWrapper>
      <Disclaimer text="*The Credit Union provides no legal advice to members and provides the foregoing information from a reliable resource to give our members a basic understanding of these services. You should consult with your tax or legal advisor regarding any particular and the current status of applicable federal and state laws." />
    </InnerContent>
  );
};

export default CoverdellAccounts;
