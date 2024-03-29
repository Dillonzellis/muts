import HeroImg from "@/app/components/inner-pages/HeroImg"
import OurStory from "./OurStory";
import WhoCanJoin from "./WhoCanJoin";
import ContactUs from "./ContactUs";
import HolidayHours from "./HolidayHours";

const AboutPage = () => {
  return (
    <div>
      <HeroImg
        title="About Us"
        desc=""
        desc2=""
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1434341455.jpg"
        imgAlt=""
      />
      <OurStory />
      <WhoCanJoin />
      <ContactUs />
      <HolidayHours />
    </div>
  )
}

export default AboutPage;
