/* eslint-disable @next/next/no-img-element */
import Container from "@/app/(layout)/Container";
import innerHeroWave from "@/public/innerHeroWave.svg";
import Image from "next/image";
import Button from "../Button";

type HeroImgProps = {
  title: string;
  desc: string;
  desc2?: string;
  imgSrc: string;
  imgAlt: string;
  btnText: string;
  btnLink: string;
};

const HeroImg = ({
  title,
  desc,
  desc2,
  btnText,
  btnLink,
  imgSrc,
  imgAlt,
}: HeroImgProps) => {
  return (
    <div className="relative">
      <Container>
        <div className="absolute top-1/2 z-10 text-white -translate-y-1/2">
          <div className="uppercase text-3xl lg:text-5xl font-semibold pb-2">
            {title}
          </div>
          <div className="text-lg lg:text-2xl">{desc}</div>
          <div className="lg:text-lg italic pb-4 lg:pb-8">{desc2}</div>
          <Button btnText={btnText} link={btnLink} />
        </div>
      </Container>
      <div className="relative bg-brandingGrey-700">
        <img
          className="brightness-50 md:brightness-75 w-full min-h-[300px] object-cover mx-auto max-w-[1920px] border-t-8 border-brandingBlue-400 md:border-t-0"
          height={715}
          width={1920}
          src={imgSrc}
          alt={imgAlt}
        />
        <svg
          className="w-full absolute bottom-0 max-h-[300px] max-w-[1920px] left-1/2 -translate-x-1/2"
          viewBox="0 0 1920 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 56.1052L80 76.6362C160 97.1673 320 137.522 480 124.07C640 110.619 800 42.6538 960 15.043C1120 -11.8598 1280 1.59161 1440 22.1227C1600 42.6538 1760 69.5566 1840 83.0079L1920 97.1673V260H1840C1760 260 1600 260 1440 260C1280 260 1120 260 960 260C800 260 640 260 480 260C320 260 160 260 80 260H0V56.1052Z"
            fill="#005397"
            fill-opacity="0.5"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
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
              <stop stop-color="#202020" />
              <stop offset="1" stop-color="#005397" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default HeroImg;
