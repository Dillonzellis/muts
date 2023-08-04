import HeroImg from "../components/inner-pages/HeroImg";
import CoverdaleAccounts from "./(savings)/coverdale/CoverDaleAccounts";
import RegSavings from "./(savings)/regSavings/RegSavings";
import MMAccounts from "./(savings)/moneyAccounts/MMAccounts";
import ClubAccounts from "./(savings)/clubAccounts/ClubAccounts";
import Cds from "./(savings)/cds/Cds";
import IRAs from "./(savings)/iras/IRAs";
import Container from "../layouts/Container";
import ContentSection from "../layouts/ContentSection";

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
          <h2 className="md:tw-text-5xl tw-text-3xl tw-font-bold tw-text-brandingBlue-400 tw-pb-2">
            Savings
          </h2>
          <div className="tw-text-lg lg:tw-text-2xl">Save & Earn Accounts</div>
          <div className="lg:tw-text-lg tw-italic">
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
      <div className="tw-py-4"></div>
    </main>
  );
};

export default page;
