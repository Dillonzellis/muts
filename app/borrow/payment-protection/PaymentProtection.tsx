import List from "@/app/components/List"
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper"
import ContentHeading from "@/app/components/inner-pages/ContentHeading"
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading"
import ContentTertHeader from "@/app/components/inner-pages/ContentTertHeader"
import InnerContent from "@/app/components/inner-pages/InnerContent"
import { paymentItems, paymentItems2 } from "./items"

const PaymentProtection = () => {
  return (
    <InnerContent
      id="payment-protection"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420039900.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="white"
    >
      <ContentHeaderWrapper>
        <ContentHeading title="Payment Protection " />
        <ContentSecondaryHeading italic title="Greater peace of mind and protection for your family" />
      </ContentHeaderWrapper>
      <List liItems={paymentItems} />
      <ContentTertHeader label="Types of Coverage:" />
      <List liItems={paymentItems2} />
    </InnerContent>
  )
}


export default PaymentProtection;
