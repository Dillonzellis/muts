import HeroImg from "@/app/components/inner-pages/HeroImg"
import OurStory from "./OurStory";
import WhoCanJoin from "./WhoCanJoin";

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
    </div>
  )
}

export default AboutPage;
