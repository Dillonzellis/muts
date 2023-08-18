import React from "react"
import List from "@/app/components/List"
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper"
import ContentHeading from "@/app/components/inner-pages/ContentHeading"
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading"
import InnerContent from "@/app/components/inner-pages/InnerContent"

const scoreItems: React.ReactNode[] = [
  <React.Fragment key="1">Earn 1 point for every $1 spent on your VISA® Platinum Rewards card</React.Fragment>,
  <React.Fragment key="2">Redeem points for <a href="https://www.scorecardrewards.com/#/home">merchandise & travel rewards</a></React.Fragment>,
  <React.Fragment key="3">Contact ScoreCard™ REWARDS at 800-854-0790</React.Fragment>,
];

const ScoreCard = () => {
  return (
    <InnerContent
      id="score-card"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1355036467.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="white"
    >
      <ContentHeaderWrapper>
        <ContentHeading title="ScoreCard™ REWARDS" />
        <ContentSecondaryHeading italic title="Spend & SCORE! 1:1" />
      </ContentHeaderWrapper>
      <List liItems={scoreItems} />
    </InnerContent>
  )
}


export default ScoreCard;
