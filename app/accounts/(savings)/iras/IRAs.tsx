import ContentBody from "@/app/components/inner-pages/ContentBody";
import TwoCol from "@/app/layouts/TwoCol";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import React from "react";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import { items, items2 } from "./items";
import ButtonWrapper from "@/app/components/inner-pages/ButtonWrapper";
import ContentTwoCol from "@/app/components/inner-pages/ContentTwoCol";
import ContentCol from "@/app/components/inner-pages/ContentCol";

const IRAs = () => {
  return (
    <ContentTwoCol
      sectionName="iras"
      variant="white">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="IRAs" />
        <ContentBody>
          Make the golden years the best years. It’s never too early to start
          saving for retirement!
        </ContentBody>
      </div>
      <div className="tw-pt-4">
        <TwoCol center="">
          <ContentCol>
            <ContentSecondaryHeading title="Roth IRAs" />
            <List liItems={items2} />
            <ButtonWrapper>
              <Button btnText="Open an Account" link="#" />
              <Button btnText="calculate savings" link="#" />
            </ButtonWrapper>
          </ContentCol>
          <ContentCol>
            <ContentSecondaryHeading title="Traditional IRAs" />
            <List liItems={items} />
          </ContentCol>
        </TwoCol>
      </div>
    </ContentTwoCol>
  );
};

export default IRAs;
