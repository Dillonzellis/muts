import Button from "@/app/components/Button";
import items from "./items";
import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent"

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
      <Button btnText="apply for a loan" link="" />
    </InnerContent>
  )
}

export default AutoLoans;
