import React from "react";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import ContentTertHeader from "@/app/components/inner-pages/ContentTertHeader";
import ContentTwoCol from "@/app/components/inner-pages/ContentTwoCol";
import ContentImg from "@/app/components/inner-pages/ContentImg";

type ListWrapperProps = {
  children: React.ReactNode;
};

const ListWrapper = ({ children }: ListWrapperProps) => {
  return <div className="tw-space-y-2">{children}</div>;
};

const liItems = [
  <React.Fragment key="1">Southern Company Gas</React.Fragment>,
  <React.Fragment key="2">AGL Services Company</React.Fragment>,
  <React.Fragment key="3">Central Valley Gas Storage</React.Fragment>,
  <React.Fragment key="4">Chattanooga Gas</React.Fragment>,
  <React.Fragment key="5">Golden Triangle Storage</React.Fragment>,
  <React.Fragment key="6">Jefferson Island Storage & Hub</React.Fragment>,
  <React.Fragment key="7">Nicor Advanced Energy</React.Fragment>,
  <React.Fragment key="8">Nicor Exchange</React.Fragment>,
  <React.Fragment key="8">Nicor Solutions</React.Fragment>,
  <React.Fragment key="9">Pivotal LNG</React.Fragment>,
  <React.Fragment key="10">Sequent Energy Management</React.Fragment>,
  <React.Fragment key="11">SouthStar Energy Services</React.Fragment>,
  <React.Fragment key="12">Virginia Natural Gas</React.Fragment>,
];

const liItems2 = [
  <React.Fragment key="1">Benton Georgia Inc.</React.Fragment>,
  <React.Fragment key="2">Hiwassee Construction Company</React.Fragment>,
  <React.Fragment key="3">Infosys Limited</React.Fragment>,
  <React.Fragment key="4">Ross and Sons Utility</React.Fragment>,
  <React.Fragment key="5">W.E. Curling</React.Fragment>,
  <React.Fragment key="6">Vertex Group Limited</React.Fragment>,
  <React.Fragment key="7">Utilities Protection Center Inc</React.Fragment>,
  <React.Fragment key="8">Gooch Trucking</React.Fragment>,
];

const WhoCanJoin = () => {
  return (
    <ContentTwoCol id="who-can-join" variant="blue">
      <div className="tw-space-y-8">
        <div className="tw-flex tw-flex-col tw-gap-2 tw-max-w-[800px]">
          <ContentHeading title="Who Can Join" />
          <ContentSecondaryHeading
            italic
            title="Membership in Mutual Savings Credit Union encompasses any employee or retiree (and immediate family members) of Southern Company Gas, its subsidiaries, affiliates, and other qualified company contractors."
          />
        </div>
        <div className="tw-grid tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-3">
          <ListWrapper>
            <ContentTertHeader label="Southern Company Gas" />
            <List liItems={liItems} />
          </ListWrapper>
          <ListWrapper>
            <ContentTertHeader label="Contractors" />
            <List liItems={liItems2} />
          </ListWrapper>
          <div className="tw-hidden lg:tw-block">
            <ContentImg
              ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1440750455.jpg"
              ImgAlt=""
            />
          </div>
        </div>
        <Button
          btnText="Join the credit union"
          link="https://dev2.growthbydesign.org/membership-application/"
        />
      </div>
    </ContentTwoCol>
  );
};

export default WhoCanJoin;
