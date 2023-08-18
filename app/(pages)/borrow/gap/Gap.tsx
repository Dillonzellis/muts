import Button from "@/app/components/Button"
import List from "@/app/components/List"
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper"
import ContentHeading from "@/app/components/inner-pages/ContentHeading"
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading"
import ContentTertHeader from "@/app/components/inner-pages/ContentTertHeader"
import InnerContent from "@/app/components/inner-pages/InnerContent"
import { gapItems } from "./items"

const Gap = () => {
  return (
    <InnerContent
      id="gap"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1201618232.jpg"
      ImgAlt=""
      order="contentFirst"
      variant="blue"
    >
      <ContentHeaderWrapper>
        <ContentHeading title="GAP Coverage" />
        <ContentSecondaryHeading italic title="Coverage for the in-between " />
      </ContentHeaderWrapper>
      <ContentTertHeader label="Guaranteed Auto Protection Plus:" />
      <List liItems={gapItems} />
    </InnerContent>
  )
}


export default Gap;
