import HeroImg from "@/app/components/inner-pages/HeroImg";
import RemoteBanking from "./remote-banking/RemoteBanking";
import IdTheft from "./id-theft/IdTheft";
import VisaGiftCards from "./VisaGiftCards";
import MoneyOrders from "./MoneyOrders";

const SolutionsPage = () => {
  return (
    <div>
      <HeroImg
        title="Solutions"
        desc="Convenient tools to ease everyday banking"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1435234222.jpg"
        imgAlt=""
      />
      <RemoteBanking />
      <IdTheft />
      <VisaGiftCards />
      <MoneyOrders />
    </div>
  );
};

export default SolutionsPage;
