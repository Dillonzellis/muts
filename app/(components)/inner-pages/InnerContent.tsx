/* eslint-disable @next/next/no-img-element */
import Container from "@/app/(layout)/Container";
import TwoCol from "@/app/(layout)/TwoCol";
import ContentCol from "./ContentCol";
import ContentImg from "./ContentImg";

type BgColorVariant = "white" | "blue" | "green" | "grey";
type OrderVariant = "imageFirst" | "contentFirst";

type InnerContentProps = {
  children: React.ReactNode;
  ImgSrc: string;
  ImgAlt: string;
  variant: BgColorVariant;
  order: OrderVariant;
};

const InnerContent = ({
  children,
  ImgSrc,
  ImgAlt,
  variant,
  order,
}: InnerContentProps) => {
  const bgColorClassMap: Record<BgColorVariant, string> = {
    white: "bg-white",
    blue: "content-bg-blue text-white",
    green: "content-bg-green",
    grey: "bg-brandingGrey-700",
  };

  const bgClass = bgColorClassMap[variant];
  const color =
    variant === "blue" || variant === "green" || variant === "grey"
      ? "text-white"
      : "text-brandingGrey-700";

  return (
    <section className={`py-8 lg:py-16 ${bgClass}`}>
      <Container>
        <TwoCol>
          {order === "contentFirst" ? (
            <>
              <ContentCol color={color}>{children}</ContentCol>
              <ContentImg ImgSrc={ImgSrc} ImgAlt={ImgAlt} />
            </>
          ) : (
            <>
              <ContentImg ImgSrc={ImgSrc} ImgAlt={ImgAlt} />
              <ContentCol>{children}</ContentCol>
            </>
          )}
        </TwoCol>
      </Container>
    </section>
  );
};

export default InnerContent;
