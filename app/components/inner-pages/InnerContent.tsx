/* eslint-disable @next/next/no-img-element */
import Container from "@/app/layouts/Container";
import TwoCol from "@/app/layouts/TwoCol";
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
    <section className={`tw-py-8 lg:tw-py-16 ${bgClass}`}>
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
