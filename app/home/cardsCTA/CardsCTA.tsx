/* eslint-disable @next/next/no-img-element */
import Container from "@/app/layouts/Container";
import CardDeck from "./CardDeck";

const CardsCTA = () => {
  return (
    <div className="cards-cta tw-relative tw-mx-auto tw-max-w-[1800px]">
      <div className="tw-relative">
        <Container>
          <h2 className="tw-absolute tw-left-1/2 tw-top-1/2 tw-max-w-3xl tw--translate-x-1/2 tw--translate-y-1/2 tw-text-center tw-text-xl tw-font-bold tw-text-white md:tw-text-3xl lg:tw-top-20">
            We&apos;re a leading provider of short-term and long-term needs for
            all of our members
          </h2>
        </Container>
        <img
          src="http://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg"
          alt="worker"
          className="lg:tw-px-22 tw-mx-auto tw-px-4 sm:tw-px-6"
          height={870}
          width={1700}
        />
      </div>
      <CardDeck />
    </div>
  );
};

export default CardsCTA;
