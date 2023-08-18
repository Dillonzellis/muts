
import Button from "@/app/components/Button";
import items from "./items";
import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent"

const BoatsCamperMoto = () => {
  return (
    <InnerContent
      id="boats-camper-motorcycle-loans"
      sectionName="boats-camper-motorcycle-loans"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-901911804.jpg"
      ImgAlt=""
      order="contentFirst"
      variant="blue"
    >
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentHeading title="Camper, Boat & Motorcycle Loans" />
        <ContentSecondaryHeading italic title="Take your adventure up a notch!" />
      </div>
      <List liItems={items} />
      <Button btnText="apply for a loan" link="" />
      <div>
      </div>
    </InnerContent>
  )
}

export default BoatsCamperMoto;
