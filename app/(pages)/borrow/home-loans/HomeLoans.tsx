import Button from "@/app/components/Button";
import List from "@/app/components/List";
import ContentHeaderWrapper from "@/app/components/inner-pages/ContentHeaderWrapper";
import ContentHeading from "@/app/components/inner-pages/ContentHeading";
import ContentSecondaryHeading from "@/app/components/inner-pages/ContentSecondaryHeading";
import ContentTertHeader from "@/app/components/inner-pages/ContentTertHeader";
import InnerContent from "@/app/components/inner-pages/InnerContent";
import { homeEquityItems, mortgageItems } from "./items";

const HomeLoans = () => {
  return (
    <InnerContent
      id="home-loans"
      ImgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1432896526.jpg"
      ImgAlt=""
      order="imageFirst"
      variant="white"
    >
      <ContentHeaderWrapper>
        <ContentHeading title="Home Loans" />
        <ContentSecondaryHeading
          italic
          title="Loans for your biggest investment"
        />
      </ContentHeaderWrapper>
      <ContentTertHeader label="mortgages" />
      <List liItems={mortgageItems} />
      <Button
        btnText="apply for a loan"
        link="https://cu.memberfirst.com/mutualsavingscu"
      />
      <ContentTertHeader label="Home Equity Loans" />
      <List liItems={homeEquityItems} />
      <Button
        btnText="apply for a loan"
        link="https://dev2.growthbydesign.org/loan-application/"
      />
    </InnerContent>
  );
};

export default HomeLoans;
