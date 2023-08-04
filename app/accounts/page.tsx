import HeroImg from "../components/inner-pages/HeroImg";
import RegSavings from "./regSavings/RegSavings";
import MMAccounts from "./moneyAccounts/MMAccounts";
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
      {/* <ClubAccounts /> */}
      {/* <Cds /> */}
      {/* <IRAs /> */}
      {/* <CoverdaleAccounts /> */}
      <div className="py-4"></div>
    </main>
  );
};

export default page;
