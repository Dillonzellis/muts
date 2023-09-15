import Container from "@/app/layouts/Container";
import Button from "@/app/components/Button";

const Hero = () => {
  return (
    <div className="hero tw-relative max:tw-mb-8">
      <Container>
        <div className="tw-absolute tw-top-1/2 tw-z-10 tw--translate-y-[70%]">
          <div className="tw-flex tw-max-w-prose tw-flex-col tw-gap-8 tw-text-white">
            <h1 className="tw-text-3xl tw-font-bold tw-capitalize tw-text-white md:tw-text-6xl">
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
        className="tw-h-[500px] tw-w-full tw-border-t-8 tw-border-brandingBlue-400 tw-object-cover tw-brightness-75 md:tw-h-[750px] md:tw-border-t-0"
        src="http://dev2.growthbydesign.org/wp-content/uploads/BG.jpg"
        alt="hero img"
        width={1920}
        height={750}
      />
      <img
        className="tw-max:hidden tw-absolute tw-bottom-0 tw-w-full tw-object-cover"
        src="http://dev2.growthbydesign.org/wp-content/uploads/Waves.png"
        alt=""
        width={1920}
        height={200}
      />
    </div>
  );
};

export default Hero;
