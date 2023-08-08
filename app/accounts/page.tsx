import HeroImg from "../components/inner-pages/HeroImg";
import CoverdaleAccounts from "./(savings)/coverdale/CoverDaleAccounts";
import RegSavings from "./(savings)/regSavings/RegSavings";
import MMAccounts from "./(savings)/moneyAccounts/MMAccounts";
import ClubAccounts from "./(savings)/clubAccounts/ClubAccounts";
import Cds from "./(savings)/cds/Cds";
import IRAs from "./(savings)/iras/IRAs";
import PersonalChecking from "./(checking)/personalChecking/PersonalChecking";
import BusinessChecking from "./(checking)/businessChecking/BusinessChecking";
import ContentTwoCol from "../components/inner-pages/ContentTwoCol";

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
      {/* Savings */}
      <RegSavings />
      <MMAccounts />
      <ClubAccounts />
      <Cds />
      <IRAs />
      <CoverdaleAccounts />
      {/* Checking */}
      <PersonalChecking />
      <BusinessChecking />
      <ContentTwoCol />
    </main>
  );
};

export default page;
