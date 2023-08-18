
import List from "@/app/components/List"
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper"
import ContentHeading from "@/app/components/inner-pages/ContentHeading"
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading"
import ContentTertHeader from "@/app/components/inner-pages/ContentTertHeader"
import InnerContent from "@/app/components/inner-pages/InnerContent"
import { mbiItems, mbiItems2 } from "./items"
import Disclaimer from "@/app/components/Disclaimer"

const MBI = () => {
  return (
    <InnerContent
      id="mbi"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1357577261.jpg"
      ImgAlt=""
      order="contentFirst"
      variant="grey"
    >
      <ContentHeaderWrapper>
        <ContentHeading title="MBI/Insurance" />
        <ContentSecondaryHeading italic title="Auto Exam Extended Protection Plan*" />
      </ContentHeaderWrapper>
      <ContentTertHeader label="4 Levels of Coverage:" />
      <List liItems={mbiItems} />
      <ContentTertHeader label="Exclusions:" />
      <List liItems={mbiItems2} />
      <div className="tw-space-y-2">
        <div><strong>Nationwide coverage</strong> – Protected across U.S. and Canada via toll-free number 1-800-709-5792</div>
        <div><strong>Towing, rental, and trip interruption </strong> Towing reimbursed up to $50, Rental Car $30 per day up to 5 days, Trip Interruption $75 per day up to 3 days</div>
        <div><strong>Other benefits: </strong> Lost Key/Lock out up to $35, Road Hazard Tire up to $100 per tire</div>
        <div><strong>Direct payment via corporate credit card</strong></div>
        <div><strong>Toll Free claim service</strong></div>
      </div>
      <Disclaimer text="*Issued by Auto Exam and may be included in the vehicle financing by the credit union. Must be purchased on used vehicles within 7 days of purchase." />
    </InnerContent>
  )
}


export default MBI;
