import Container from "../layouts/Container";
import ContentSection from "../layouts/ContentSection";

const JoinCTA = () => {
  return (
    <ContentSection className="join-cta tw-pt-24 lg:tw-pt-[20rem] xl:tw-pt-[18rem] 2xl:tw-pt-32">
      <Container>
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-max-w-prose tw-flex-col tw-gap-3 lg:tw-gap-6 tw-text-center">
            <div className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-text-brandingBlue-400 tw-font-bold">
              Learn how to join MSCU today!
            </div>
            <div className="tw-text-lg">
              Join MSCU and use all of the free services that MSCU offers its
              members such as checking, home banking and bill pay services
            </div>
          </div>
        </div>
      </Container>
    </ContentSection>
  );
};

export default JoinCTA;
