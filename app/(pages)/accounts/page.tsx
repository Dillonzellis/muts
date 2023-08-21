import HeroImg from "@/app/components/inner-pages/HeroImg";
import DebitCards from "./(resources)/debit-cards/DebitCards";
import RegSavings from "./(savings)/regSavings/RegSavings";
import CoverdellAccounts from "./(savings)/coverdale/CoverDaleAccounts";
import MMAccounts from "./(savings)/moneyAccounts/MMAccounts";
import ClubAccounts from "./(savings)/clubAccounts/ClubAccounts";
import Cds from "./(savings)/cds/Cds";
import IRAs from "./(savings)/iras/IRAs";
import PersonalChecking from "./(checking)/personalChecking/PersonalChecking";
import BusinessChecking from "./(checking)/businessChecking/BusinessChecking";
import { DirectDeposit } from "./(resources)/direct-deposit/DirectDeposit";
import PayrollDeduction from "./(resources)/PayrollDeduction";

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
      <CoverdellAccounts />
      {/* Checking */}
      <PersonalChecking />
      <BusinessChecking />
      <DirectDeposit />
      <PayrollDeduction />
      <DebitCards />
    </main>
  );
};

export default page;
