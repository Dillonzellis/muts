import Container from "@/app/layouts/Container";
import TwoCol from "@/app/layouts/TwoCol";
import ContentCol from "./ContentCol";
import ContentImg from "./ContentImg";
import SectionContent from "./SectionContent";

type BgColorVariant = "white" | "blue" | "green" | "grey";
type OrderVariant = "imageFirst" | "contentFirst";

type InnerContentProps = {
  sectionName: string;
  children: React.ReactNode;
  ImgSrc: string;
  ImgAlt: string;
  variant: BgColorVariant;
  order: OrderVariant;
};

const InnerContent = ({
  sectionName,
  children,
  ImgSrc,
  ImgAlt,
  variant,
  order,
}: InnerContentProps) => {
  const bgColorClassMap: Record<BgColorVariant, string> = {
    white: "tw-bg-white",
    blue: "tw-content-bg-blue tw-text-white",
    green: "tw-content-bg-green",
    grey: "tw-bg-brandingGrey-700",
  };

  const bgClass = bgColorClassMap[variant];
  const color =
    variant === "blue" || variant === "green" || variant === "grey"
      ? "tw-text-white"
      : "tw-text-brandingGrey-700";

  return (
    <SectionContent sectionName={sectionName} bgClass={bgClass}>
      <Container>
        <TwoCol>
          {order === "contentFirst" ? (
            <>
              <ContentCol color={color} order="tw-order-2 md:tw-order-1">{children}</ContentCol>
              <ContentImg ImgSrc={ImgSrc} ImgAlt={ImgAlt} order="tw-order-1 md:tw-order-2" />
            </>
          ) : (
            <>
              <ContentImg ImgSrc={ImgSrc} ImgAlt={ImgAlt} />
              <ContentCol>{children}</ContentCol>
            </>
          )}
        </TwoCol>
      </Container>
    </SectionContent>
  );
};

export default InnerContent;
