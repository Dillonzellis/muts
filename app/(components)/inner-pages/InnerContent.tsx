/* eslint-disable @next/next/no-img-element */
import Container from "@/app/(layout)/Container";
import ContentSection from "@/app/(layout)/ContentSection";
import TwoCol from "@/app/(layout)/TwoCol";
import ContentCol from "./ContentCol";

type InnerContentProps = {
  children: React.ReactNode;
  ImgSrc: string;
  ImgAlt: string;
};

const InnerContent = ({ children, ImgSrc, ImgAlt }: InnerContentProps) => {
  return (
    <div>
      <ContentSection>
        <Container>
          <TwoCol>
            <div>
              <img className="rounded-md shadow-lg" src={ImgSrc} alt={ImgAlt} />
            </div>
            <ContentCol>{children}</ContentCol>
          </TwoCol>
        </Container>
      </ContentSection>
    </div>
  );
};

export default InnerContent;
