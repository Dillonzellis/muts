import Container from "@/app/layouts/Container";
import HeroImg from "@/app/components/inner-pages/HeroImg"
import SectionContent from "@/app/components/inner-pages/SectionContent";
import { AuxHeader, AuxWrapper } from "@/app/components/AuxHeaders";
import Button from "@/app/components/Button";
import ButtonWrapper from "@/app/components/inner-pages/ButtonWrapper";
import LinkText from "@/app/components/LinkText";


const disclosures = [
  {
    text: "Online Banking Service Agreement Disclosure",
    link: "http://dev2.growthbydesign.org/wp-content/uploads/ONLINE-BANKING-SERVICE-AGREEMENT-DISCLOSURE.pdf"
  },
  {
    text: "Mobile Check Deposit Capture Agreement",
    link: "http://dev2.growthbydesign.org/wp-content/uploads/MOBILE-CHECK-DEPOSIT-CAPTURE-AGREEMENT-DISCLOSURE.pdf"
  },
  {
    text: "Regulation CC",
    link: "http://dev2.growthbydesign.org/wp-content/uploads/RegulationCC.pdf"
  },
]

const DisclosuresPage = () => {
  return (
    <div>
      <HeroImg
        title="Disclosures"
        desc=""
        imgSrc="http://dev2.growthbydesign.org/wp-content/uploads/iStock-895294284.jpg"
        imgAlt=""
        darker
      />
      <Container>
        <SectionContent>
          <div className="tw-pb-8">
            <AuxWrapper>
              <AuxHeader>Ensuring transparency and clarity in all our financial interactions.</AuxHeader>
              <div>At Mutual Savings Credit Union, we believe in maintaining the trust and confidence of our members through complete transparency. Our disclosures are designed to provide clear and comprehensive information about our products, services, and policies. Ensuring you are well-informed is not just a regulatory requirement for us—it's a commitment to uphold the values we stand for in every transaction."</div>
            </AuxWrapper>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-4">
            {disclosures.map((disclosure, idx) => (
              <LinkText key={idx} label={disclosure.text} href={disclosure.link} />
            ))}
          </div>
        </SectionContent>
      </Container>
    </div>
  )
}

export default DisclosuresPage;
