import Button from "@/app/components/Button";
import items from "./items";
import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import Disclaimer from "@/app/components/Disclaimer";

const AutoLoans = () => {
  return (
    <InnerContent
      id="auto-loans"
      sectionName="auto-loans"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1392123753.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="white"
    >
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentHeading title="Auto Loans" />
        <ContentSecondaryHeading italic title="Drive into savings!" />
      </div>
      <List liItems={items} />
      <Button
        btnText="apply for a loan"
        link="https://dev2.growthbydesign.org/loan-application/"
      />
      <Disclaimer
        text="*Insurance and Warranty products are not products of the credit union; and are not obligations of or guaranteed by the credit union. Insurance or warranties may be purchased from an agent or an insurance company of the member’s choice; and the credit union makes no representations as to the services of any provider.
        "
      />
    </InnerContent>
  );
};

export default AutoLoans;
