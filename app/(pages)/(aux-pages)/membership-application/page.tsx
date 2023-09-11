import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import PageHeader from "@/app/components/inner-pages/PageHeader";
import ModalButton from "@/app/components/ModalBtn";

const list = [
  {
    content:
      "Complete all boxes in the Member Information section. List a reference name for someone who will always know your location. If designating a joint owner be sure their information is complete.",
  },
  {
    content:
      "Attach a clear copy of a government issued ID (driver's license, state ID, passport, etc.) for yourself and any persons that will be joint on your account.",
  },
  {
    content:
      "Attach a $5.00 check or money order made payable to yourself. This is your membership pledge that is used to open your Primary Shares account. All members begin with a Primary Shares account and we can add checking or other accounts from here.",
  },
  {
    content:
      "Application must be signed and dated by primary and joint members.",
  },
  {
    content:
      "Only original applications can be accepted. We cannot accept faxes, copies, or emailed application as specified by the USA Patriot Act.",
  },
];

const MembershipApplication = () => {
  return (
    <SectionContent sectionName="financial-calculators">
      <Container>
        <PageHeader title="Membership Application" />
        <div className="tw-text-xl md:tw-text-xl tw-italic tw-pb-2 md:tw-pb-8 tw-text-black">
          Application Instructions
        </div>
        <ol className="tw-list-decimal tw-max-w-[100ch] tw-space-y-2 tw-pb-8 tw-list-inside">
          {list.map((li) => (
            <li className="tw-text-lg">{li.content}</li>
          ))}
        </ol>
        <div className="tw-flex tw-flex-col md:tw-flex-row">
          <ModalButton href="http://dev2.growthbydesign.org/wp-content/uploads/membership.pdf">
            I Agree
          </ModalButton>
        </div>
      </Container>
    </SectionContent>
  );
};

export default MembershipApplication;
