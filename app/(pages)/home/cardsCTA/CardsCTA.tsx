/* eslint-disable @next/next/no-img-element */
import Container from "@/app/layouts/Container";
import CardDeck from "./CardDeck";

const CardsCTA = () => {
  return (
    <div className="cards-cta tw-relative tw-mx-auto tw-max-w-[1800px]">
      <div className="tw-relative">
        <Container>
          <h2 className="lg:px-0 tw-absolute tw-left-1/2 tw-top-1/2 tw-z-10 tw-w-full tw-max-w-[50rem] tw--translate-x-1/2 tw--translate-y-1/2 tw-px-8 tw-text-center tw-text-xl tw-font-bold tw-capitalize tw-text-white md:tw-text-3xl lg:tw-left-[40%] lg:tw-top-[5%] lg:tw-max-w-xl lg:tw-transform-none lg:tw-text-3xl xl:tw-max-w-3xl xl:tw-text-5xl">
            Providing affordable financial solutions to members since 1933.
          </h2>
        </Container>
        <img
          src="http://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg"
          alt="worker"
          className="lg:tw-px-22 tw-mx-auto tw-px-4 tw-brightness-90 sm:tw-px-6"
          height={870}
          width={1700}
        />
      </div>
      <CardDeck />
    </div>
  );
};

export default CardsCTA;
