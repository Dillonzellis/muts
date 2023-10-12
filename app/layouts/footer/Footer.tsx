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
        <div className="tw-grid tw-gap-12 tw-py-12 md:tw-grid-cols-3 md:tw-gap-4">
          <Col>
            <ColHeader title="contact us" />
            <div className="tw-mb-4 md:tw-mb-6">
              <div>10 Peachtree Place, NE</div>
              <div>Atlanta, GA 30309</div>
            </div>
            <div className="">
              <div>
                Phone:{" "}
                <LinkText
                  label="470-747-8163"
                  href="tel:+1470-747-8163"
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
          <div className="tw-flex tw-flex-col tw-items-center tw-gap-4">
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
