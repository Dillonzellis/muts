/* eslint-disable @next/next/no-img-element */
import Button from "../(components)/Button";
import Container from "../(layout)/Container";

const Hero = () => {
  return (
    <section className="relative max:mb-8">
      <Container>
        <div className="absolute top-1/2 -translate-y-[70%]">
          <div className="flex max-w-prose flex-col gap-8 text-white">
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              We&apos;ll help you pay for that trip to Paradise
            </h1>
            <p>
              Get Summertime loan from MSCU! You can borrow up to $1,000 with a
              low APR* of 8%, and a maximum 6 months tern. Automatic payment is
              required**. Offer available May 1st - August 31st.
            </p>
            <Button btnText="apply today" link="#" className="self-start" />
          </div>
        </div>
      </Container>
      <img
        className="h-[500px] md:h-[750px] w-full object-cover border-t-8 border-brandingBlue-400 md:border-t-0"
        src="http://dev2.growthbydesign.org/wp-content/uploads/BG.jpg"
        alt="hero img"
        width={1920}
        height={750}
      />
      <img
        className="absolute bottom-0 w-full object-cover max:hidden"
        src="http://dev2.growthbydesign.org/wp-content/uploads/Waves.png"
        alt=""
        width={1920}
        height={200}
      />
    </section>
  );
};

export default Hero;
