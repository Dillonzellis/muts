import ContentBody from "@/app/components/inner-pages/ContentBody";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import React from "react";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import { items, items2 } from "./items";
import ButtonWrapper from "@/app/components/inner-pages/ButtonWrapper";

const IRAs = () => {
  return (
    <InnerContent
      sectionName="iras"
      order="imageFirst"
      variant="white"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="IRAs" />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentBody>
          Make the golden years the best years. It’s never too early to start
          saving for retirement!
        </ContentBody>
        <ContentSecondaryHeading title="Traditional IRAs" />
        <List liItems={items} />
        <ContentSecondaryHeading title="Roth IRAs" />
        <List liItems={items2} />
      </div>
      <ButtonWrapper>
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </ButtonWrapper>
    </InnerContent>
  );
};

export default IRAs;
