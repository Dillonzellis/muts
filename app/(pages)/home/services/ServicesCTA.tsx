import Container from "@/app/layouts/Container";
import Button from "@/app/components/Button";
import ContentSection from "@/app/layouts/ContentSection";
import CheckItem from "./CheckItem";

const ServicesCTA = () => {
  return (
    <ContentSection className="services-cta">
      <Container>
        <div className="tw-grid tw-gap-8 md:tw-grid-cols-2 tw-items-center">
          <div>
            <img
              className="tw-mx-auto md:tw-mx-0"
              src="http://dev2.growthbydesign.org/wp-content/uploads/Left.png"
              alt=""
              height={470}
              width={470}
            />
          </div>
          <div className="tw-flex tw-flex-col tw-gap-8">
            <div>
              <div className="tw-mb-4 tw-text-2xl md:tw-text-3xl tw-text-brandingBlue-400">
                Stay in touch with your accounts 24/7 with our many remote
                banking options!
              </div>
              <hr className="tw-w-28 tw-border-2 tw-border-brandingGreen-400" />
            </div>
            <div className="tw-flex tw-flex-col tw-gap-4">
              <CheckItem label="Online Banking" />
              <CheckItem label="Mobile Banking" />
              <CheckItem label="P2P Transfers" />
              <CheckItem label="Bill Pay" />
            </div>
            <Button
              btnText="learn more!"
              link="https://dev2.growthbydesign.org/solutions/#remote-banking"
              className="self-start"
            />
          </div>
        </div>
      </Container>
    </ContentSection>
  );
};

export default ServicesCTA;
