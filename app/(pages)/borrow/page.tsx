import HeroImg from "../components/inner-pages/HeroImg"
import AdditionalLoans from "./AdditionalLoans";
import AutoLoans from "./autoLoans/AutoLoans";
import BoatsCamperMoto from "./boats/BoatsCamperMoto";
import CreditCards from "./credit-cards/CreditCards";
import Gap from "./gap/Gap";
import HomeLoans from "./home-loans/HomeLoans";
import MBI from "./mbi-insurance/MBI";
import PaymentProtection from "./payment-protection/PaymentProtection";
import ScoreCard from "./score-card/ScoreCard";

const BorrowPage = () => {
  return (
    <div>
      <HeroImg
        title="Borrow"
        desc="Borrow & Buy Accounts"
        desc2="Competitive loans promote access & credit growth"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1393059175.jpg"
        imgAlt=""
      />
      {/* Loans */}
      <AutoLoans />
      <BoatsCamperMoto />
      <HomeLoans />
      <AdditionalLoans />
      <CreditCards />
      {/* Lending Resources */}
      <Gap />
      <PaymentProtection />
      <MBI />
      <ScoreCard />
    </div>
  )
}

export default BorrowPage;
