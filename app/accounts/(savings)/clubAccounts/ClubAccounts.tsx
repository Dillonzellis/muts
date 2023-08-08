import ContentBody from "@/app/components/inner-pages/ContentBody";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import React from "react";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import { items, items2 } from "./items";
import ContentTwoCol from "@/app/components/inner-pages/ContentTwoCol";
import TwoCol from "@/app/layouts/TwoCol";
import ContentCol from "@/app/components/inner-pages/ContentCol";

const ClubAccounts = () => {
  return (
    <ContentTwoCol sectionName="club-accts" variant="white">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="Club Accounts " />
        <ContentBody>
          Save a little at a time throughout the year for a specific purpose
          so you can reap the benefits of your hard work when the need rolls
          around!
        </ContentBody>
      </div>
      <TwoCol>
        <ContentCol>
          <ContentSecondaryHeading title="Holiday Club Accounts" />
          <div>
            Prepare for the expensive holiday shopping season by saving
            throughout the year.
          </div>
          <List liItems={items} />
          <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row tw-pb-2">
            <Button btnText="Open an Account" link="#" />
            <Button btnText="calculate savings" link="#" />
          </div>
        </ContentCol>
        <ContentCol>
          <ContentSecondaryHeading title="Vacation Club Accounts" />
          <div>Stash funds away for a vacation getaway!</div>
          <List liItems={items2} />
          <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row">
            <Button btnText="Open an Account" link="#" />
            <Button btnText="calculate savings" link="#" />
          </div>
        </ContentCol>
      </TwoCol>
    </ContentTwoCol>
  );
};

export default ClubAccounts;
