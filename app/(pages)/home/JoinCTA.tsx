import Button from "@/app/components/Button";
import Container from "@/app/layouts/Container";
import ContentSection from "@/app/layouts/ContentSection";

const JoinCTA = () => {
  return (
    <ContentSection className="join-cta tw-pt-24 lg:tw-pt-[20rem] xl:tw-pt-[18rem] 2xl:tw-pt-32">
      <Container>
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-max-w-prose tw-flex-col tw-gap-3 lg:tw-gap-6 tw-text-center">
            <div className="tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-text-brandingBlue-400 tw-font-bold">
              Not a member yet?
            </div>
            <div className="tw-text-lg">
              As a member of MSCU, you’ll not only enjoy lifetime membership in
              the credit union, but you can access lower loan rates, higher
              savings rates, and all the digital banking solution you need.
              Plus, your friends and family members will also become eligible to
              join. So, what are you waiting for?
            </div>
            <div className="tw-flex tw-justify-center tw-max-w-[200px] tw-w-full tw-mx-auto">
              <Button
                btnText="Join Now!"
                link="https://dev2.growthbydesign.org/membership-application/"
                fullWidth
              />
            </div>
          </div>
        </div>
      </Container>
    </ContentSection>
  );
};

export default JoinCTA;
