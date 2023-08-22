
import React from "react";
import Container from "@/app/layouts/Container";
import HeroImg from "@/app/components/inner-pages/HeroImg"
import SectionContent from "@/app/components/inner-pages/SectionContent";
import { AuxHeader, AuxWrapper } from "@/app/components/AuxHeaders";
import LinkText from "@/app/components/LinkText";



const forms = [
  {
    linkText: "ACH Origination",
    href: "http://dev2.growthbydesign.org/wp-content/uploads/ACH-authorization.pdf",
  },
  {
    linkText: "Address Change Form",
    href: "https://www.mutualsavingscu.org/assets/framework/pages/forms/address.html",
  },
  {
    linkText: "Loan Application",
    href: "https://www.mutualsavingscu.org/assets/framework/pages/forms/disclose1.html",
  },
  {
    linkText: "Membership Application",
    href: "https://www.mutualsavingscu.org/assets/framework/pages/forms/disclose6.html",
  },
  {
    linkText: "Payroll Deduction Form",
    href: "https://www.mutualsavingscu.org/assets/framework/pages/forms/disclose7.html",
  },
  {
    linkText: "Report Lost/Stolen Card",
    href: "/about-us/#contact-us",
  },
  {
    linkText: "Send More Info Form",
    href: "https://www.mutualsavingscu.org/assets/framework/pages/forms/disclose8.html",
  },
  {
    linkText: "Stop Payment Form",
    href: "https://www.mutualsavingscu.org/assets/framework/pages/forms/disclose5.html",
  },
  {
    linkText: "Wire Transfer Form",
    href: "https://www.mutualsavingscu.org/assets/framework/pages/forms/disclose12.html",
  },
  {
    linkText: "Visa® Credit Card Application",
    href: "#",
  },
  {
    linkText: "Visa® Debit Card Application",
    href: "#",
  },
  {
    linkText: "Visa® Debit Card Dispute Form",
    href: "#",
  },
  {
    linkText: "Visa® Credit Card Dispute Form",
    href: "#",
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
          <div>
            <AuxWrapper>
              <AuxHeader>Streamlined access to essential documents for your banking needs</AuxHeader>
              <div>At Mutual Savings Credit Union, we make it easy for you to open a savings account, apply for a VISA® credit card, set up a direct deposit or use various other services. Just fill out an application and mail or fax it to the credit union. It's fast and easy. We are also happy to send you any additional information that you might want on our products and services. Simply fill out a send more info form online and send it to us with a click of your mouse.</div>
            </AuxWrapper>
          </div>
          <div className="tw-grid md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-pt-8 tw-gap-4">
            {forms.map((form, idx) => (
              <div key={idx}><LinkText label={form.linkText} href={form.href} /></div>
            ))}
          </div>
        </SectionContent>
      </Container>
    </div>
  )
}

export default FormsPage;
