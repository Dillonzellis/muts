import Container from "../layouts/Container";

const Hero = () => {
  return (
    <div className="hero tw-relative max:tw-mb-8">
      <Container>
        <div className="tw-absolute tw-top-1/2 tw--translate-y-[70%]">
          <div className="tw-flex tw-max-w-prose tw-flex-col tw-gap-8 tw-text-white">
            <h1 className="tw-text-3xl md:tw-text-6xl tw-font-bold tw-text-white">
              We&apos;ll help you pay for that trip to Paradise
            </h1>
            <p>
              Get Summertime loan from MSCU! You can borrow up to $1,000 with a
              low APR* of 8%, and a maximum 6 months tern. Automatic payment is
              required**. Offer available May 1st - August 31st.
            </p>
            {/* <Button btnText="apply today" link="#" className="self-start" /> */}
          </div>
        </div>
      </Container>
      <img
        className="tw-h-[500px] md:tw-h-[750px] tw-w-full tw-object-cover tw-border-t-8 tw-border-brandingBlue-400 tw-md:border-t-0"
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
  )
}

export default Hero;
