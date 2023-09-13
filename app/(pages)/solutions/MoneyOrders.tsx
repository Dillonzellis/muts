import List from "@/app/components/List";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import React from "react";
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper";

const items: React.ReactNode[] = [
  <React.Fragment key="1">Available for In-Branch Purchase</React.Fragment>,
  <React.Fragment key="2">Small $1 Fee Per Money Order Applies</React.Fragment>,
  <React.Fragment key="3">Small Purchase Fee Applies</React.Fragment>,
];

const MoneyOrders = () => {
  return (
    <InnerContent
      id="money-orders"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1368987043.jpg"
      ImgAlt=""
      order="contentFirst"
      variant="grey"
    >
      <ContentHeaderWrapper>
        <ContentHeading title="Money Orders" />
        <ContentSecondaryHeading
          italic
          title="A reliable and convenient alternative to cash or checks!"
        />
      </ContentHeaderWrapper>
      <List liItems={items} />
    </InnerContent>
  );
};

export default MoneyOrders;
