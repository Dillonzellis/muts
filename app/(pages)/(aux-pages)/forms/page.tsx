import React from "react";
import Container from "@/app/layouts/Container";
import HeroImg from "@/app/components/inner-pages/HeroImg";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import { AuxHeader, AuxWrapper } from "@/app/components/AuxHeaders";
import LinkText from "@/app/components/LinkText";

const forms = [
  {
    linkText: "ACH Authorization Form",
    href: "/wow-modal-id-16",
  },
  {
    linkText: "Address Change Form",
    href: "/wow-modal-id-17",
  },
  {
    linkText: "Loan Application",
    href: "https://dev2.growthbydesign.org/loan-application/",
  },
  {
    linkText: "Membership Application",
    href: "https://dev2.growthbydesign.org/membership-application/",
  },
  {
    linkText: "Payroll Deduction Form",
    href: "/#wow-modal-id-7",
  },
  {
    linkText: "Report Lost/Stolen Card",
    href: "/about-us/#contact-us",
  },
  {
    linkText: "Send More Info Form",
    href: "/#wow-modal-id-18",
  },
  {
    linkText: "Stop Payment Form",
    href: "/wow-modal-id-5",
  },
  {
    linkText: "Wire Transfer Form",
    href: "/wow-modal-id-6",
  },
  {
    linkText: "Visa® Credit Card Application",
    href: "/wow-modal-id-10",
  },
  {
    linkText: "Visa® Debit Card Application",
    href: "/wow-modal-id-20",
  },
  {
    linkText: "Visa® Debit Card Dispute Form",
    href: "/wow-modal-id-19",
  },
  {
    linkText: "Visa® Credit Card Dispute Form",
    href: "/wow-modal-id-8",
  },
];

const FormsPage = () => {
  return (
    <div>
      <HeroImg
        title="Forms"
        desc=""
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-1389705604.jpg"
        imgAlt=""
        darker
      />
      <Container>
        <SectionContent>
          <div className="tw-text-2xl tw-font-semibold tw-text-brandingBlue-400 md:tw-text-3xl">
            Streamlined access to essential documents for your banking needs.
          </div>
          <div className="tw-grid tw-gap-4 tw-pt-8 md:tw-grid-cols-3 lg:tw-grid-cols-4">
            {forms.map((form, idx) => (
              <div key={idx}>
                <LinkText label={form.linkText} href={form.href} />
              </div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </div>
  );
};

export default FormsPage;
