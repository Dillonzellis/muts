import ContentBody from "@/app/components/inner-pages/ContentBody";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import React from "react";
import Button from "../../components/Button";
import List from "../../components/List";
import InnerContent from "../../components/inner-pages/InnerContent";
import { items, items2 } from "./items";

const ClubAccounts = () => {
  return (
    <InnerContent
      sectionName="club-accts"
      order="imageFirst"
      variant="white"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div>
        <div className="tw-flex tw-flex-col tw-gap-3">
          <ContentHeading title="Club Accounts " />
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2">
          <ContentBody>
            Save a little at a time throughout the year for a specific purpose
            so you can reap the benefits of your hard work when the need rolls
            around!
          </ContentBody>
          <ContentSecondaryHeading title="Holiday Club Accounts" />
          <div>
            Prepare for the expensive holiday shopping season by saving
            throughout the year.
          </div>
          <List liItems={items} />
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row tw-pb-2">
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </div>

      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentSecondaryHeading title="Vacation Club Accounts" />
        <div>Stash funds away for a vacation getaway!</div>
        <List liItems={items2} />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row">
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </div>
    </InnerContent>
  );
};

export default ClubAccounts;
