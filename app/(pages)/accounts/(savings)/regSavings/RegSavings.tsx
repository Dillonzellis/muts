import ContentBody from "@/app/components/inner-pages/ContentBody";
import ButtonWrapper from "@/app/components/inner-pages/ButtonWrapper";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import List from "@/app/components/List";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import items from "./items";
import Button from "@/app/components/Button";

const RegSavings = () => {
  return (
    <InnerContent
      id="regular-savings"
      sectionName="reg-savings"
      order="imageFirst"
      variant="white"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1365692265.jpg"
      ImgAlt="savings account"
    >
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="Regular Savings" />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentBody>
          Whether saving for a specific purchase or simply stashing more away
          for a rainy day, our dividend-earning savings accounts have you
          covered!
        </ContentBody>
      </div>
      <List liItems={items} />
      <ButtonWrapper>
        <Button
          btnText="Open an Account"
          link="https://dev2.growthbydesign.org/membership-application/"
        />
        <Button
          btnText="calculate savings"
          link="https://dev2.growthbydesign.org/financial-calculators/"
        />
      </ButtonWrapper>
    </InnerContent>
  );
};

export default RegSavings;
