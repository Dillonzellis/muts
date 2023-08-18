import InnerContent from "../components/inner-pages/InnerContent"
import ContentHeaderWrapper from "../components/inner-pages/ContentHeaderWrapper"
import ContentHeading from "../components/inner-pages/ContentHeading"
import ContentSecondaryHeading from "../components/inner-pages/ContentSecondaryHeading"

const AdditionalLoans = () => {
  return (
    <InnerContent
      id="additional-loans"
      order="contentFirst"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1272953941.jpg"
      ImgAlt=""
      variant="grey"
    >

      <ContentHeaderWrapper>
        <ContentHeading title="Additional Consumer Loans" />
        <ContentSecondaryHeading italic title="Loans for just about any reason!" />
      </ContentHeaderWrapper>
      <div>Accordion placeholder</div>
    </InnerContent>

  )
}

export default AdditionalLoans;
