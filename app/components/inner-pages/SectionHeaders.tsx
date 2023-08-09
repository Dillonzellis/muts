import Container from "@/app/layouts/Container";
import ContentSection from "@/app/layouts/ContentSection";

type SectionHeadersProp = {
  title: string,
  subHeading?: string,
  subText?: string,
}

const SectionHeaders = ({ title, subHeading, subText }: SectionHeadersProp) => {
  return (
    <Container>
      <ContentSection>
        <h2 className="md:tw-text-5xl tw-text-3xl tw-font-bold tw-text-brandingBlue-400 tw-pb-2">
          {title}
        </h2>
        <div className="tw-text-lg lg:tw-text-2xl">{subHeading}</div>
        <div className="lg:tw-text-lg tw-italic">
          {subText}
        </div>
      </ContentSection>
    </Container>
  )
}

export default SectionHeaders;
