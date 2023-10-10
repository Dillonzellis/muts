import React from "react";
import Container from "@/app/layouts/Container";
import HeroImg from "@/app/components/inner-pages/HeroImg";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import LinkText from "@/app/components/LinkText";
import TwoCol from "@/app/layouts/TwoCol";
import List from "@/app/components/List";
import Disclaimer from "@/app/components/Disclaimer";
import Button from "@/app/components/Button";
import { AuxHeader, AuxWrapper } from "@/app/components/AuxHeaders";

const liItems: React.ReactNode[] = [
  <React.Fragment key="1">
    Between 8 and 32 characters in length.
  </React.Fragment>,
  <React.Fragment key="2">
    At least 1 uppercase alphabetic character.
  </React.Fragment>,
  <React.Fragment key="3">
    At least 1 lowercase alphabetic character.
  </React.Fragment>,
  <React.Fragment key="4">
    At least 1 number OR 1 special character (!#$%_-).
  </React.Fragment>,
  <React.Fragment key="5">
    Space(s) may be used but cannot be at the beginning or end of the password
    or phrase.
  </React.Fragment>,
  <React.Fragment key="6">
    Cannot be 1 of the previous 5 passwords.
  </React.Fragment>,
];

const CurrentNewsPage = () => {
  return (
    <div>
      <HeroImg
        title="Current News"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-155394774.jpg"
        imgAlt=""
      />
      <Container>
        <SectionContent>
          <div className="tw-space-y-12">
            <TwoCol center="tw-items-base">
              <AuxWrapper>
                <AuxHeader>Visa Credit & Debit Card Alerts</AuxHeader>
                <div>
                  New fraud protections are now available for your MSCU Visa
                  credit and debit cards. Get e-mail and/or text alerts based on
                  dollar ($) limits and/or international activity and/or
                  online/phone (card not present) transactions. Go to{" "}
                  <LinkText
                    label="www.visa.com/purchasealerts"
                    href="https://usa.visa.com/pay-with-visa/featured-technologies/purchase-alerts.html"
                  />{" "}
                  to Enroll your MSCU cards.
                </div>
              </AuxWrapper>
              <AuxWrapper>
                <AuxHeader>
                  ScoreCard Rewards Now Includes Cash Back! & Debit Card Alerts
                </AuxHeader>
                <div>
                  Cash Back has been added as one of your reward options for
                  your MSCU Visa credit card. Browse the rewards store at{" "}
                  <LinkText
                    label="www.scorecardrewards.com."
                    href="https://www.scorecardrewards.com/#/home"
                  />
                </div>
              </AuxWrapper>
            </TwoCol>
            <TwoCol center="tw-items-base">
              <AuxWrapper>
                <AuxHeader>
                  New internet banking login credentials as a result of the
                  system update.
                </AuxHeader>
                <div>
                  User Passwords must have the following characteristics:
                </div>
                <List liItems={liItems} />
                <Disclaimer text="NOTE: Passwords are case-sensitive." />
              </AuxWrapper>
              <AuxWrapper>
                <AuxHeader>Direct Deposit Limits:</AuxHeader>
                <div>
                  In an effort to combat fraud and identity theft, new IRS
                  procedures effective January 2015 will limit the number of
                  refunds electronically deposited into a single financial
                  account or pre-paid debit card to three.
                </div>
                <Button
                  btnText="Learn more"
                  link="https://www.irs.gov/refunds/direct-deposit-limits"
                />
              </AuxWrapper>
            </TwoCol>
          </div>
        </SectionContent>
      </Container>
    </div>
  );
};

export default CurrentNewsPage;
