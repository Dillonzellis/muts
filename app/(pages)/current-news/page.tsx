import React from "react";
import Container from "@/app/layouts/Container";
import HeroImg from "@/app/components/inner-pages/HeroImg"
import SectionContent from "@/app/components/inner-pages/SectionContent";
import LinkText from "@/app/components/LinkText";
import TwoCol from "@/app/layouts/TwoCol";
import List from "@/app/components/List";
import Disclaimer from "@/app/components/Disclaimer";
import Button from "@/app/components/Button";

type NewsHeaderProps = {
  children: React.ReactNode
}

type NewsWrapperProps = {
  children: React.ReactNode
}

const NewsHeader = ({ children }: NewsHeaderProps) => {
  return <div className="tw-text-2xl tw-text-brandingBlue-400 tw-font-semibold">{children}</div>
}

const NewsWrapper = ({ children }: NewsWrapperProps) => {
  return <div className="tw-space-y-4">{children}</div>
}


const liItems: React.ReactNode[] = [
  <React.Fragment key="1">Between 8 and 32 characters in length.</React.Fragment>,
  <React.Fragment key="2">At least 1 uppercase alphabetic character.</React.Fragment>,
  <React.Fragment key="3">At least 1 lowercase alphabetic character.</React.Fragment>,
  <React.Fragment key="4">At least 1 number OR 1 special character (!#$%_-).</React.Fragment>,
  <React.Fragment key="5">Space(s) may be used but cannot be at the beginning or end of the password or phrase.</React.Fragment>,
  <React.Fragment key="6">Cannot be 1 of the previous 5 passwords.</React.Fragment>,
];

const BorrowPage = () => {
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
              <NewsWrapper>
                <NewsHeader>Visa Credit & Debit Card Alerts</NewsHeader>
                <div>New fraud protections are now available for your MSCU Visa credit and debit cards. Get e-mail and/or text alerts based on dollar ($) limits and/or international activity and/or online/phone (card not present) transactions. Go to  <LinkText label="www.visa.com/purchasealerts" href="www.visa.com/purchasealerts" /> to Enroll your MSCU cards.</div>
              </NewsWrapper>
              <NewsWrapper>
                <NewsHeader>ScoreCard Rewards Now Includes Cash Back! & Debit Card Alerts</NewsHeader>
                <div>Cash Back has been added as one of your reward options for your MSCU Visa credit card. Browse the rewards store at <LinkText label="www.scorecardrewards.com." href="www.scorecardrewards.com." /></div>
              </NewsWrapper>
            </TwoCol>
            <NewsWrapper>
              <NewsHeader>New internet banking login credentials as a result of the system update.</NewsHeader>
              <div>User Passwords must have the following characteristics:</div>
              <List liItems={liItems} />
              <Disclaimer text="NOTE: Passwords are case-sensitive." />
            </NewsWrapper>
            <TwoCol center="tw-items-base">
              <NewsWrapper>
                <NewsHeader>Direct Deposit Limits:</NewsHeader>
                <div>In an effort to combat fraud and identity theft, new IRS procedures effective January 2015 will limit the number of refunds electronically deposited into a single financial account or pre-paid debit card to three.</div>
                <Button btnText="Learn more" link="https://www.irs.gov/refunds/direct-deposit-limits" />
              </NewsWrapper>
              <NewsWrapper>
                <NewsHeader>Equifax Security Breach:</NewsHeader>
                <div>On Sept. 7, 2017 an Equifax Inc. press release announced a cybersecurity incident potentially impacting approximately 143 million U.S. consumers</div>
                <Button btnText="Learn more" link="http://dev2.growthbydesign.org/wp-content/uploads/EquifaxSecurityBreach9.13.17.pdf" />
              </NewsWrapper>
            </TwoCol>
          </div>
        </SectionContent>
      </Container>
    </div>
  )
}

export default BorrowPage;
