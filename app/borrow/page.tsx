import HeroImg from "../components/inner-pages/HeroImg"
import AutoLoans from "./autoLoans/AutoLoans";
import HomeLoans from "./autoLoans/home-loans/HomeLoans";
import BoatsCamperMoto from "./boats/BoatsCamperMoto";

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
    </div>
  )
}

export default BorrowPage;
