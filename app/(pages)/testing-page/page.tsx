import Modal from "@/app/components/Modal";
import HeroImg from "@/app/components/inner-pages/HeroImg";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import { modalData } from "@/app/data/modalData";
import LoginModal from "@/app/components/LoginModal";

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
          <div className="tw-space-y-8">
            {modalData.map((modal) => (
              <Modal
                key={modal.id}
                disclosure={modal.disclosure}
                modalName={modal.name}
                id={modal.id}
                continueLink={modal.continue}
              />
            ))}
          </div>
        </SectionContent>
        <div className="tw-min-h-[10rem]"></div>
        <LoginModal />
      </Container>
    </div>
  );
};

export default TestingPage;
