import { AuxHeader } from "@/app/components/AuxHeaders";
import Button from "@/app/components/Button";
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentImg from "@/app/components/inner-pages/ContentImg";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import ContentTertHeader from "@/app/components/inner-pages/ContentTertHeader";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import TwoCol from "@/app/layouts/TwoCol";
import React from "react";


type ColHeaderProps = {
  children: React.ReactNode
}

type ColItemProps = {
  children: React.ReactNode
}

type ColWrapperProps = {
  children: React.ReactNode
}

const ColHeader = ({ children }: ColHeaderProps) => {
  return <div className="tw-text-2xl tw-font-bold tw-text-brandingBlue-400">{children}</div>
}

const ColItem = ({ children }: ColItemProps) => {
  return <div className="tw-text-lg">{children}</div>
}

const ColWrapper = ({ children }: ColWrapperProps) => {
  return <div className="tw-space-y-1">{children}</div>
}

const ContactUs = () => {
  return (
    <Container>
      <SectionContent
        id="contact-us"
      >
        <div className="tw-space-y-4 lg:tw-space-y-12">
          <ContentHeaderWrapper>
            <ContentHeading title="Contact Us" />
            <ContentSecondaryHeading italic title="Reach out for personalized assistance, questions, or any banking inquiries you might have" />
          </ContentHeaderWrapper>
          <div className="tw-grid lg:tw-grid-cols-3 tw-gap-4">
            <ColWrapper>
              <ColHeader>Office</ColHeader>
              <ColItem>Mutual Savings Credit Union</ColItem>
              <ColItem>10 Peachtree Place, NE</ColItem>
              <ColItem>Atlanta, Georgia 30309</ColItem>
              <Button btnText="Email Us!" link="mailto:mutualsavingscu@mutualsavingscu.org" />
            </ColWrapper>
            <ColWrapper>
              <ColHeader>Hours:</ColHeader>
              <ColItem>M, T, Th & F: 8:00 am - 4:30 pm</ColItem>
              <ColItem>W: 9:30 am - 4:30 pm</ColItem>
              <ColItem><em>(Closed during Southern Company Gas corporate holidays)</em></ColItem>
            </ColWrapper>
            <ColWrapper>
              <div className="tw-pb-4">
                <ColHeader>Phone Numbers:</ColHeader>
                <ColItem><a href="tel:+1470-747-8163">470.747.8163</a></ColItem>
                <ColItem><a href="tel:+18007716695">800.771.6695</a></ColItem>
                <ColItem><strong>Audio Response: </strong><a href="tel:+18008352815">800.835.2815</a></ColItem>
              </div>
              <ColHeader>Fax: </ColHeader>
              <ColItem><strong>Branch: </strong><a href="tel:+18007716695">800.771.6695</a></ColItem>
              <ColItem><strong>Loans: </strong><a href="tel:+1470-747-8884">470.747.8884</a></ColItem>
              <ColItem><strong>Accounting: </strong><a href="tel:+1470-747-8886">470.747.8886</a></ColItem>
            </ColWrapper>
          </div>
        </div>
        <div className="tw-pt-8">
          <TwoCol>
            <ColWrapper>
              <div className="tw-pb-4">
                <ColHeader>VISA® Debit Cards:</ColHeader>
                <ColItem>Lost or stolen: <a href="tel:+1888-263-3370">888.263.3370</a></ColItem>
                <ColItem>PIN Changes: <a href="tel:+1855-726-4885">855.726.4885</a></ColItem>
              </div>
              <ColHeader>VISA® Credit Cards</ColHeader>
              <ColItem><a href="www.ezcardinfo.com">www.ezcardinfo.com</a></ColItem>
              <ColItem><strong>Card Member Services: </strong><a href="tel:+1800-299-9842">800.299.9842</a></ColItem>
              <ColItem><strong>ScoreCard™ REWARDS: </strong><a href="tel:+1800-854-0790"></a>800.854.0790</ColItem>
              <ColItem><strong>Lost/Stolen: </strong><a href="tel:+1800-325-3678">800.325.3678</a></ColItem>
              <ColItem><strong>PIN Changes: </strong><a href="tel:+1866-297-3408">866.297.3408</a></ColItem>
              <ColItem>Mail in payments: VISA® Credit Cards P.O. Box 31279, Tampa, FL 33630 or P.O. Box 4569, Atlanta, GA 30302</ColItem>
            </ColWrapper>
            <ContentImg ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1400318061.jpg" ImgAlt="" />
          </TwoCol>
        </div>
      </SectionContent>
    </Container >
  )
}

export default ContactUs;
