/* eslint-disable @next/next/no-img-element */
import Container from "@/app/(layout)/Container";
import ContentSection from "@/app/(layout)/ContentSection";
import TwoCol from "@/app/(layout)/TwoCol";

const StandardSection = () => {
  return (
    <div>
      <ContentSection>
        <Container>
          <TwoCol>
            <div>
              <img
                className="rounded-md shadow-lg"
                src="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1420037581.jpg"
                alt="savings account"
              />
            </div>
            <div>
              <h2>Savings</h2>
              <div></div>
            </div>
          </TwoCol>
        </Container>
      </ContentSection>
    </div>
  );
};

export default StandardSection;
