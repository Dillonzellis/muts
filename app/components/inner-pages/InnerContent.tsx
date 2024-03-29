import Container from "@/app/layouts/Container";
import TwoCol from "@/app/layouts/TwoCol";
import ContentCol from "./ContentCol";
import ContentImg from "./ContentImg";
import SectionContent from "./SectionContent";

type BgColorVariant = "white" | "blue" | "green" | "grey";
type OrderVariant = "imageFirst" | "contentFirst";

type InnerContentProps = {
  sectionName?: string | undefined;
  id?: string;
  children: React.ReactNode;
  ImgSrc: string;
  ImgAlt: string;
  rounded?: boolean;
  vertical?: boolean;
  variant: BgColorVariant;
  order: OrderVariant;
};

const InnerContent = ({
  id,
  sectionName,
  children,
  ImgSrc,
  ImgAlt,
  rounded,
  vertical,
  variant,
  order,
}: InnerContentProps) => {
  const bgColorClassMap: Record<BgColorVariant, string> = {
    white: "tw-bg-white",
    blue: "tw-content-bg-blue tw-text-white",
    green: "tw-content-bg-green",
    grey: "tw-bg-brandingGrey-700 tw-text-white",
  };

  const bgClass = bgColorClassMap[variant];
  const color =
    variant === "blue" || variant === "green" || variant === "grey"
      ? "tw-text-white"
      : "tw-text-brandingGrey-700";

  return (
    <SectionContent id={id} sectionName={sectionName} bgClass={bgClass}>
      <Container>
        <TwoCol>
          {order === "contentFirst" ? (
            <>
              <ContentCol color={color} order="tw-order-2 lg:tw-order-1">
                {children}
              </ContentCol>
              <ContentImg
                ImgSrc={ImgSrc}
                ImgAlt={ImgAlt}
                rounded={rounded}
                vertical={vertical}
                order="tw-order-1 md:tw-order-2"
              />
            </>
          ) : (
            <>
              <ContentImg ImgSrc={ImgSrc} ImgAlt={ImgAlt} vertical={vertical} />
              <ContentCol color={color}>{children}</ContentCol>
            </>
          )}
        </TwoCol>
      </Container>
    </SectionContent>
  );
};

export default InnerContent;
