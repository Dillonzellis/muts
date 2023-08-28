import Modal from "@/app/components/Modal";
import HeroImg from "@/app/components/inner-pages/HeroImg";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import Login from "@/app/components/Login";

const TestingPage = () => {
  return (
    <div>
      <HeroImg
        title="Solutions"
        desc="Convenient tools to ease everyday banking"
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1435234222.jpg"
        imgAlt=""
      />
      <Container>
        <SectionContent>
          <Modal
            modalClass="test"
            id="30"
            continueLink="https://www.google.com"
          />
        </SectionContent>
        <SectionContent>{/* <Login /> */}</SectionContent>
      </Container>
    </div>
  );
};

export default TestingPage;
