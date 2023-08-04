import ContentBody from "@/app/components/inner-pages/ContentBody";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import List from "@/app/components/List";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import items from "./items";
import Button from "@/app/components/Button";

const RegSavings = () => {
  return (
    <InnerContent
      sectionName="reg-savings"
      order="imageFirst"
      variant="white"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
      ImgAlt="savings account">
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
      <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row">
        <Button btnText="Open an Account" link="#" />
        <Button btnText="calculate savings" link="#" />
      </div>
    </InnerContent>
  );
};

export default RegSavings;
