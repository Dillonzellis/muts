import InnerContent from "@/app/components/inner-pages/InnerContent"
import ContentHeading from "@/app/components/inner-pages/ContentHeading"
import ContentBody from "@/app/components/inner-pages/ContentBody"
import List from "@/app/components/List"
import items from "./items"
import Disclaimer from "@/app/components/Disclaimer"

export const DirectDeposit = () => {
  return (
    <InnerContent
      sectionName="business-checking"
      order="contentFirst"
      variant="white"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/check-reorder.png"
      ImgAlt="">
      <div className="tw-flex tw-flex-col tw-gap-3">
        <ContentHeading title="Direct Deposit" />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <ContentBody>
          Fast & worry-free access to your funds.
        </ContentBody>
      </div>
      <List liItems={items} />
      <Disclaimer text="NOTE: If the Primary Account number is less than 6 digits, add leading zeros for a total of 6 digits." />
    </InnerContent>
  )
}


