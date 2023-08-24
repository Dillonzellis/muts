import React from "react";
import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent"
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper";

const liItems: React.ReactNode[] = [
  <React.Fragment key="1">New Year&apos;s Day – January 2, 2023</React.Fragment>,
  <React.Fragment key="2">Martin Luther King, Jr. Day – January 16, 2023</React.Fragment>,
  <React.Fragment key="3">Memorial Day – May 29, 2023</React.Fragment>,
  <React.Fragment key="4">Independence Day – July 4, 2023</React.Fragment>,
  <React.Fragment key="5">Labor Day – September 4, 2023</React.Fragment>,
  <React.Fragment key="6">Thanksgiving Holiday – November 23, 2023</React.Fragment>,
  <React.Fragment key="7">Thanksgiving Holiday – November 24, 2023</React.Fragment>,
  <React.Fragment key="8">Christmas Holiday – December 25, 2023</React.Fragment>,
  <React.Fragment key="9">Christmas Holiday – December 26, 2023</React.Fragment>,
  <React.Fragment key="10">New Year&apos;s Day – January 1, 2024</React.Fragment>,
];

const HolidayHours = () => {
  return (
    <InnerContent
      id="holiday-hours"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1441926420.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="blue"
    >
      <ContentHeaderWrapper>
        <ContentHeading title="Holiday Hours" />
        <ContentSecondaryHeading italic title="Stay informed about our special timings to serve you better during festive seasons." />
      </ContentHeaderWrapper>
      <List liItems={liItems} />
    </InnerContent >
  )
}

export default HolidayHours;
