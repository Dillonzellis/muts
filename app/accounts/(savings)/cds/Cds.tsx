import ContentBody from "@/app/components/inner-pages/ContentBody";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import React from "react";
import List from "@/app/components/List";
import Button from "@/app/components/Button";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import items from "./items";

const Cds = () => {
  return (
    <InnerContent
      sectionName="cds"
      order="contentFirst"
      variant="grey"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="Certificates of Deposit (CDs)" />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentBody>
          Plant the seeds and watch your savings grow! Save faster with a CD.
        </ContentBody>
        <List liItems={items} />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row">
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </div>
    </InnerContent>
  );
};

export default Cds;
