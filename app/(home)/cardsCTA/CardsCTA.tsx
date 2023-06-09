/* eslint-disable @next/next/no-img-element */
import Container from "@/app/(layout)/Container";
import CardDeck from "./CardDeck";

const CardsCTA = () => {
  return (
    <section className="relative mx-auto max-w-[1800px]">
      <div className="relative">
        <Container>
          <h2 className="absolute left-1/2 top-1/2 max-w-3xl -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold text-white md:text-3xl lg:top-20">
            We&apos;re a leading provider of short-term and long-term needs for
            all of our members
          </h2>
        </Container>
        <img
          src="http://dev2.growthbydesign.org/wp-content/uploads/home-cta.jpg"
          alt="worker"
          className="lg:px-22 mx-auto px-4 sm:px-6"
          height={870}
          width={1700}
        />
      </div>
      <CardDeck />
    </section>
  );
};

export default CardsCTA;
