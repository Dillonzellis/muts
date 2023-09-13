import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import React from "react";
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper";

const items: React.ReactNode[] = [
  <React.Fragment key="1">Available for In-Branch Purchase</React.Fragment>,
  <React.Fragment key="2">
    Accepted Almost Anywhere – <em>In store or online!</em>
  </React.Fragment>,
  <React.Fragment key="3">Safer Payment Method than Cash</React.Fragment>,
  <React.Fragment key="4">Small Purchase Fee Applies</React.Fragment>,
];

const VisaGiftCards = () => {
  return (
    <InnerContent
      id="visa-gift-cards"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1446091634-scaled.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="white"
      vertical
    >
      <ContentHeaderWrapper>
        <ContentHeading title="Visa® Gift Cards" />
        <ContentSecondaryHeading
          italic
          title="You can’t go wrong with a gift card! Birthdays, holidays, graduations….a gift card is the perfect gift for any occasion!"
        />
      </ContentHeaderWrapper>
      <List liItems={items} />
    </InnerContent>
  );
};

export default VisaGiftCards;
