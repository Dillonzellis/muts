import Button from "@/app/components/Button";
import Container from "@/app/layouts/Container";
import ContentSection from "@/app/layouts/ContentSection";

const perks = [
  {
    label: "Lifetime Membership | ",
  },
  {
    label: "Lower Loan Rates | ",
  },
  {
    label: "Higher Savings Rates | ",
  },
  {
    label: "Family Membership Eligibility | ",
  },
  {
    label: "Digital Solutions & More",
  },
];

const JoinCTA = () => {
  return (
    <ContentSection className="join-cta tw-pt-24 lg:tw-pt-[20rem] xl:tw-pt-[18rem] 2xl:tw-pt-32">
      <Container>
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-max-w-prose tw-flex-col tw-gap-2 tw-text-center lg:tw-gap-4">
            <div className="tw-text-2xl tw-font-bold tw-text-brandingBlue-400 md:tw-text-3xl lg:tw-text-4xl">
              Not a member yet?
            </div>
            <div className="tw-text-lg">
              Join MSCU today and take advantage of all the benefits we have to
              offer!
            </div>
            <div>
              {perks.map((perk) => (
                <span key={perk.label} className="tw-text-lg tw-font-semibold">
                  {perk.label}
                </span>
              ))}
            </div>
            <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-[200px] tw-justify-center">
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
