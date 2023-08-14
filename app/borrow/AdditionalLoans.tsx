import InnerContent from "../components/inner-pages/InnerContent"
import ContentHeaderWrapper from "../components/inner-pages/ContentHeaderWrapper"
import ContentHeading from "../components/inner-pages/ContentHeading"
import ContentSecondaryHeading from "../components/inner-pages/ContentSecondaryHeading"

const AdditionalLoans = () => {
  return (
    <InnerContent
      id="additional-loans"
      order="contentFirst"
      ImgSrc=""
      ImgAlt=""
      variant="grey"
    >

      <ContentHeaderWrapper>
        <ContentHeading title="Additional Consumer Loans" />
        <ContentSecondaryHeading italic title="Loans for just about any reason!" />
      </ContentHeaderWrapper>
    </InnerContent>

  )
}

export default AdditionalLoans;
