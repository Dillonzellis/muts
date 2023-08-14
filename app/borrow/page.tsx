import HeroImg from "../components/inner-pages/HeroImg"
import AdditionalLoans from "./AdditionalLoans";
import AutoLoans from "./autoLoans/AutoLoans";
import BoatsCamperMoto from "./boats/BoatsCamperMoto";
import HomeLoans from "./home-loans/HomeLoans";

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
    </div>
  )
}

export default BorrowPage;
