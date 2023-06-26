/* eslint-disable @next/next/no-img-element */
import Container from "@/app/(layout)/Container";
import TwoCol from "@/app/(layout)/TwoCol";
import ContentCol from "./ContentCol";

type BgColorVariant = "white" | "blue" | "green";
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
    blue: "bg-brandingBlue-400",
    green: "bg-brandingGreen-400",
  };

  const bgClass = bgColorClassMap[variant];

  return (
    <section className={`py-8 lg:py-16 ${bgClass}`}>
      <Container>
        <TwoCol>
          {order === "contentFirst" ? (
            <>
              <ContentCol>{children}</ContentCol>
              <div>
                <img
                  className="rounded-md shadow-lg"
                  src={ImgSrc}
                  alt={ImgAlt}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <img
                  className="rounded-md shadow-lg"
                  src={ImgSrc}
                  alt={ImgAlt}
                />
              </div>
              <ContentCol>{children}</ContentCol>
            </>
          )}
        </TwoCol>
      </Container>
    </section>
  );
};

export default InnerContent;
