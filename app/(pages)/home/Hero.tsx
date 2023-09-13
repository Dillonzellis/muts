import Container from "@/app/layouts/Container";
import Button from "@/app/components/Button";

const Hero = () => {
  return (
    <div className="hero tw-relative max:tw-mb-8">
      <Container>
        <div className="tw-absolute tw-z-10 tw-top-1/2 tw--translate-y-[70%]">
          <div className="tw-flex tw-max-w-prose tw-flex-col tw-gap-8 tw-text-white">
            <h1 className="tw-text-3xl md:tw-text-6xl tw-font-bold tw-text-white tw-capitalize">
              Get the right financing before you find the right car!
            </h1>
            <p className="tw-text-xl">
              Let us help you shop & negotiate with confidence.
            </p>
            <Button
              btnText="apply today"
              link="https://dev2.growthbydesign.org/membership-application/"
              className="self-start"
            />
          </div>
        </div>
      </Container>
      <img
        className="tw-brightness-75 tw-h-[500px] md:tw-h-[750px] tw-w-full tw-object-cover tw-border-t-8 md:tw-border-t-0 tw-border-brandingBlue-400"
        src="http://dev2.growthbydesign.org/wp-content/uploads/BG.jpg"
        alt="hero img"
        width={1920}
        height={750}
      />
      <img
        className="tw-absolute tw-bottom-0 tw-w-full tw-object-cover tw-max:hidden"
        src="http://dev2.growthbydesign.org/wp-content/uploads/Waves.png"
        alt=""
        width={1920}
        height={200}
      />
    </div>
  );
};

export default Hero;
