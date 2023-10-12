import Button from "@/app/components/Button";
import LinkText from "@/app/components/LinkText";
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentImg from "@/app/components/inner-pages/ContentImg";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import TwoCol from "@/app/layouts/TwoCol";
import React from "react";

type ColHeaderProps = {
  children: React.ReactNode;
};

type ColItemProps = {
  children: React.ReactNode;
};

type ColWrapperProps = {
  children: React.ReactNode;
};

const ColHeader = ({ children }: ColHeaderProps) => {
  return (
    <div className="tw-text-2xl tw-font-bold tw-text-brandingBlue-400">
      {children}
    </div>
  );
};

const ColItem = ({ children }: ColItemProps) => {
  return <div className="tw-text-lg">{children}</div>;
};

const ColWrapper = ({ children }: ColWrapperProps) => {
  return <div className="tw-space-y-1">{children}</div>;
};

const ContactUs = () => {
  return (
    <Container>
      <SectionContent id="contact-us">
        <div className="tw-space-y-4 lg:tw-space-y-12">
          <ContentHeaderWrapper>
            <ContentHeading title="Contact Us" />
            <ContentSecondaryHeading
              italic
              title="Reach out for personalized assistance, questions, or any banking inquiries you might have"
            />
          </ContentHeaderWrapper>
          <div className="tw-grid tw-gap-4 lg:tw-grid-cols-3">
            <ColWrapper>
              <ColHeader>Office</ColHeader>
              <ColItem>Mutual Savings Credit Union</ColItem>
              <ColItem>10 Peachtree Place, NE</ColItem>
              <ColItem>Atlanta, Georgia 30309</ColItem>
              <Button
                btnText="Email Us!"
                link="mailto:mutualsavingscu@mutualsavingscu.org"
              />
            </ColWrapper>
            <ColWrapper>
              <ColHeader>Hours:</ColHeader>
              <ColItem>M, T, Th & F: 8:00 am - 4:30 pm</ColItem>
              <ColItem>W: 9:30 am - 4:30 pm</ColItem>
              <ColItem>
                <em>(Closed during Southern Company Gas corporate holidays)</em>
              </ColItem>
            </ColWrapper>
            <ColWrapper>
              <div className="tw-pb-4">
                <ColHeader>Phone Numbers:</ColHeader>
                <ColItem>
                  <LinkText label="470.747.8163" href="tel:+1470-747-8163" />
                </ColItem>
              </div>
              <ColHeader>Fax: </ColHeader>
              <ColItem>
                <strong>Loans: </strong>
                <LinkText label="470.747.8884" href="tel:+1470-747-8884" />
              </ColItem>
              <ColItem>
                <strong>Accounting: </strong>
                <LinkText label="470.747.8886" href="tel:+1470-747-8886" />
              </ColItem>
            </ColWrapper>
          </div>
        </div>
        <div className="tw-pt-8">
          <TwoCol>
            <ColWrapper>
              <div className="tw-pb-4">
                <ColHeader>VISA® Debit Cards:</ColHeader>
                <ColItem>
                  Lost or stolen:{" "}
                  <LinkText label="888.263.3370" href="tel:+1888-263-3370" />
                </ColItem>
                <ColItem>
                  PIN Changes:{" "}
                  <LinkText label="855.726.4885" href="tel:+1855-726-4885" />
                </ColItem>
              </div>
              <ColHeader>VISA® Credit Cards</ColHeader>
              <ColItem>
                <LinkText
                  label="www.ezcardinfo.com"
                  href="www.ezcardinfo.com"
                />
              </ColItem>
              <ColItem>
                <strong>Card Member Services: </strong>
                <LinkText label="800.299.9842" href="tel:+1800-299-9842" />
              </ColItem>
              <ColItem>
                <strong>ScoreCard™ REWARDS: </strong>
                <LinkText label="800.854.0790" href="tel:+1800-854-0790" />
              </ColItem>
              <ColItem>
                <strong>Lost/Stolen: </strong>
                <LinkText label="800.325.3678" href="tel:+1800-325-3678" />
              </ColItem>
              <ColItem>
                <strong>PIN Changes: </strong>
                <LinkText label="866.297.3408" href="tel:+1866-297-3408" />
              </ColItem>
              <ColItem>
                Mail in payments: VISA® Credit Cards P.O. Box 31279, Tampa, FL
                33630 or P.O. Box 4569, Atlanta, GA 30302
              </ColItem>
            </ColWrapper>
            <ContentImg
              ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1400318061.jpg"
              ImgAlt=""
            />
          </TwoCol>
        </div>
      </SectionContent>
    </Container>
  );
};

export default ContactUs;
