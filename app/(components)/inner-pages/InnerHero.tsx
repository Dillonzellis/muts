/* eslint-disable @next/next/no-img-element */

type InnerHeroProps = {
  title: (string | JSX.Element)[];
  desc: string;
  btnText: string;
  btnLink: string;
  imgSrc: string;
  imgAlt: string;
};

import Container from "@/app/(layout)/Container";
import ContentSection from "@/app/(layout)/ContentSection";
import TwoCol from "@/app/(layout)/TwoCol";
import React from "react";
import Button from "../Button";

const InnerHero = ({
  title,
  desc,
  btnText,
  btnLink,
  imgSrc,
  imgAlt,
}: InnerHeroProps) => {
  return (
    <div className="border-t-8 border-brandingBlue-400 md:border-0">
      <Container>
        <ContentSection>
          <TwoCol>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                {title.map((item, index) => (
                  <React.Fragment key={index}>{item}</React.Fragment>
                ))}
              </h1>
              <div className="md:text-lg">{desc}</div>
              <Button btnText={btnText} link={btnLink} />
            </div>
            <div>
              <div className="inner-hero-image-container relative">
                <img
                  className="block rounded-md shadow-lg relative z-10"
                  src={imgSrc}
                  alt={imgAlt}
                />
              </div>
            </div>
          </TwoCol>
        </ContentSection>
      </Container>
    </div>
  );
};

export default InnerHero;
