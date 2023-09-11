import LinkText from "@/app/components/LinkText";
import Container from "../Container";
import Col from "./Col";
import ColHeader from "./ColHeader";
import ColLink from "./ColLink";
import CopyFooter from "./CopyFooter";
import { usefulLinks } from "./data";

const Footer = () => {
  return (
    <div className="footer tw-bg-brandingGrey-700 tw-text-white">
      <Container>
        <div className="tw-py-12 tw-grid md:tw-grid-cols-3 md:tw-gap-4 tw-gap-12">
          <Col>
            <ColHeader title="contact us" />
            <div className="md:tw-mb-6 tw-mb-4">
              <div>10 Peachtree Place, NE</div>
              <div>Atlanta, GA 30309</div>
            </div>
            <div className="">
              <div>
                Phone:{" "}
                <LinkText
                  label="(800) 771-6695"
                  href="tel:+18007716695"
                  dark
                  underline={false}
                />
              </div>
              <div>
                Email:{" "}
                <LinkText
                  label="mutualsavingscu@mutualsavingscu.org"
                  href="mailto:mutualsavingscu@mutualsavingscu.org"
                  dark
                  underline={false}
                />
              </div>
            </div>
          </Col>

          <Col>
            <ColHeader title="useful links" />
            {usefulLinks.map((link, id) => (
              <ColLink key={id} href={link.href} linkText={link.linkText} />
            ))}
          </Col>
          <div className="tw-flex tw-flex-col tw-gap-4 tw-items-center">
            <img
              src="http://dev2.growthbydesign.org/wp-content/uploads/ncua.webp"
              width={200}
            />
            <img
              src="http://dev2.growthbydesign.org/wp-content/uploads/eqh-logo.png"
              width={100}
            />
          </div>
        </div>
        <CopyFooter />
      </Container>
    </div>
  );
};

export default Footer;
