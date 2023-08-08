import InnerContent from "@/app/components/inner-pages/InnerContent";
import ButtonWrapper from "@/app/components/inner-pages/ButtonWrapper";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentBody from "@/app/components/inner-pages/ContentBody";
import List from "@/app/components/List";
import items from "./items";
import Button from "@/app/components/Button";
import Disclaimer from "@/app/components/Disclaimer";

const PersonalChecking = () => {
  return (
    <InnerContent
      sectionName="personal-checking"
      order="imageFirst"
      variant="white"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="Personal Checking" />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentBody>
          Save. Earn. Spend. Checking with the flexibility and convenience you need to live your life!
        </ContentBody>
      </div>
      <List liItems={items} />
      <Disclaimer text="*You must maintain a minimum daily balance of $250.00 in your account each day to obtain the disclosed annual percentage yield. | **Members are eligible for the Courtesy Pay feature after 6 months of satisfactory performance on a share draft account. This feature offers overdraft protection for a fee. Call the credit union for details" />
      <ButtonWrapper>
        <Button btnText="Open an Account" link="#" />
      </ButtonWrapper>
    </InnerContent>
  )
}

export default PersonalChecking;
