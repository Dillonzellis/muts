import Container from "@/app/layouts/Container";

type HeroImgProps = {
  title: string;
  desc?: string;
  desc2?: string;
  imgSrc: string;
  imgAlt: string;
  btnText?: string;
  btnLink?: string;
};

const HeroImg = ({
  title,
  desc,
  desc2,
  imgSrc,
  imgAlt,
}: HeroImgProps) => {
  return (
    <div className="hero-img tw-relative">
      <Container>
        <div className="tw-absolute tw-top-1/2 tw-z-10 tw-text-white tw--translate-y-1/2">
          <h1 className="tw-uppercase tw-text-3xl lg:tw-text-5xl tw-font-semibold tw-pb-2">
            {title}
          </h1>
          <div className="tw-text-lg lg:tw-text-2xl">{desc}</div>
          <div className="lg:tw-text-lg tw-italic">{desc2}</div>
        </div>
      </Container>
      <div className="tw-relative tw-bg-brandingGrey-700">
        <img
          className="tw-max-h-[680px] tw-brightness-50 md:tw-brightness-75 tw-w-full tw-min-h-[300px] tw-object-cover tw-mx-auto tw-max-w-[1920px] tw-border-t-8 tw-border-brandingBlue-400 md:tw-border-t-0"
          height={715}
          width={1920}
          src={imgSrc}
          alt={imgAlt}
        />
        <svg
          className="tw-w-full tw-absolute tw-bottom-0 tw-max-h-[300px] tw-max-w-[1920px] tw-left-1/2 tw--translate-x-1/2"
          viewBox="0 0 1920 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 56.1052L80 76.6362C160 97.1673 320 137.522 480 124.07C640 110.619 800 42.6538 960 15.043C1120 -11.8598 1280 1.59161 1440 22.1227C1600 42.6538 1760 69.5566 1840 83.0079L1920 97.1673V260H1840C1760 260 1600 260 1440 260C1280 260 1120 260 960 260C800 260 640 260 480 260C320 260 160 260 80 260H0V56.1052Z"
            fill="#005397"
            fillOpacity="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 82.7683L80 100.615C160 118.461 320 153.538 480 141.846C640 130.153 800 71.076 960 47.0758C1120 23.6911 1280 35.3835 1440 53.2297C1600 71.076 1760 94.4607 1840 106.153L1920 118.461V260H1840C1760 260 1600 260 1440 260C1280 260 1120 260 960 260C800 260 640 260 480 260C320 260 160 260 80 260H0V82.7683Z"
            fill="url(#paint0_linear_107_273)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_107_273"
              x1="-2309.5"
              y1="394.015"
              x2="1294.91"
              y2="3.51237"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#202020" />
              <stop offset="1" stopColor="#005397" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default HeroImg;
