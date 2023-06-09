import HeroImg from "../(components)/inner-pages/HeroImg";
import Container from "../(layout)/Container";
import ContentSection from "../(layout)/ContentSection";
import Cds from "./cds/Cds";
import ClubAccounts from "./clubAccounts/ClubAccounts";
import CoverdaleAccounts from "./coverdale/CoverdaleAccounts";
import IRAs from "./iras/IRAs";
import MMAccounts from "./moneyAccounts/MMAccounts";
import RegSavings from "./regSavings/RegSavings";

const page = () => {
  return (
    <main>
      <HeroImg
        title="accounts"
        desc="Save & Earn Accounts"
        desc2="Dividend bearing accounts promote financial growth"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/account-hero.jpg"
        imgAlt="accounts"
      />
      <Container>
        <ContentSection>
          <h2 className="text-5xl font-bold text-brandingBlue-400 pb-2">
            Savings
          </h2>
          <div className="text-lg lg:text-2xl">Save & Earn Accounts</div>
          <div className="lg:text-lg italic">
            Dividend bearing accounts promote financial growth
          </div>
        </ContentSection>
      </Container>
      <RegSavings />
      <MMAccounts />
      <ClubAccounts />
      <Cds />
      <IRAs />
      <CoverdaleAccounts />
      <div className="py-4"></div>
    </main>
  );
};

export default page;
