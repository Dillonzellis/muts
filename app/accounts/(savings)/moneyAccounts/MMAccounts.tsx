import ContentBody from "@/app/components/inner-pages/ContentBody";
import ButtonWrapper from "@/app/components/inner-pages/ButtonWrapper";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import React from "react";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import items from "./items";

const MMAccounts = () => {
  return (
    <InnerContent
      sectionName="money-market"
      order="contentFirst"
      variant="blue"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="Money Market Accounts" />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentBody>
          Is it savings? Is it checking? It’s actually both! Earn more money &
          convenience with a money market account.
        </ContentBody>
        <List liItems={items} />
      </div>
      <ButtonWrapper>
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </ButtonWrapper>
    </InnerContent>
  );
};

export default MMAccounts;
