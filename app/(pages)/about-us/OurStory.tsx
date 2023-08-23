import React from "react";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent"


const liItems = [
  <React.Fragment key="1">Lifetime membership – <em>Once a member, always a member even if you move, change jobs, or retire!</em></React.Fragment>,
  <React.Fragment key="2">Lower rates on loans</React.Fragment>,
  <React.Fragment key="3">Higher dividends on savings</React.Fragment>,
  <React.Fragment key="4">Convenient financial solutions</React.Fragment>,
  <React.Fragment key="5">Online & mobile access to funds</React.Fragment>,
  <React.Fragment key="6">Nationwide branch & ATM access </React.Fragment>,
  <React.Fragment key="7">And much more!</React.Fragment>,
]

const OurStory = () => {
  return (
    <InnerContent
      id="our-story"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1183963423.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="white"
    >
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentHeading title="Our Story" />
        <ContentSecondaryHeading italic title="Mutual Savings Credit Union is a full-service, not-for-profit financial institution aimed at helping members afford life" />
      </div>
      <div>
        In 1933 during the Great Degression, eight employees of former Atlanta Gas Light Company gathered their funds to establish our credit union as a member-owned financial cooperative. It cost $.35 to get approval
        from Georgia’s Secretary of State and Mutual Savings Credit Union was born. Deposits and membership fees were stored in a cigar box - secured in the company’s safe.
      </div>
      <div>
        Today, more than 80 years later, Mutual Savings Credit Union serves any employee or retiree (and immediate family members) of Southern Company Gas, its subsidiaries, affiliates, and other qualified company contractors. Members enjoy a host of financial benefits including:
      </div>
      <List liItems={liItems} />
      <Button btnText="Join the credit union" link="" />
    </InnerContent>
  )
}

export default OurStory;
