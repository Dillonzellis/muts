/* eslint-disable @next/next/no-img-element */
import Container from "@/app/(layout)/Container";
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
    <div>
      <Container>
        <div className="absolute top-1/2 z-10 text-white">
          <div className="uppercase text-5xl font-semibold pb-2">{title}</div>
          <div className="text-2xl">{desc}</div>
          <div className="text-lg italic pb-8">{desc2}</div>
          <Button btnText={btnText} link={btnLink} />
        </div>
      </Container>
      <div>
        <img className="brightness-75" src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default HeroImg;
