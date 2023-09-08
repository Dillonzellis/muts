import Button from "@/app/components/Button";
import List from "@/app/components/List";
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import creditItems from "./items";
import Disclaimer from "@/app/components/Disclaimer";

const CreditCards = () => {
  return (
    <InnerContent
      id="credit-cards"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1460236858.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="white"
    >
      <ContentHeaderWrapper>
        <ContentHeading title="VISA® Rewards Platinum Credit Cards" />
        <ContentSecondaryHeading
          italic
          title="All the convenience, not all the fees."
        />
      </ContentHeaderWrapper>
      <List liItems={creditItems} />
      <Button btnText="apply for a credit card" link="/#wow-modal-id-10" />
      <Disclaimer text="*All loans subject to credit approval. Membership, terms, and conditions apply. | **Insurance and Warranty products are not products of the credit union; and are not obligations of or guaranteed by the credit union. Insurance or warranties may be purchased from an agent or an insurance company of the member’s choice; and the credit union makes no representations as to the services of any provider." />
    </InnerContent>
  );
};

export default CreditCards;
