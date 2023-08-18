import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import { calcs } from "./items";
import PageHeader from "@/app/components/inner-pages/PageHeader";

const CalculatorIndex = () => {
  return (
    <SectionContent sectionName="financial-calculators">
      <Container>
        <PageHeader title="Financial Calculators" />
        <div className="tw-text-xl md:tw-text-xl tw-italic tw-pb-2 md:tw-pb-8 tw-text-black">Calculate your savings, monthly payments & more!</div>
        <div className="tw-grid md:tw-grid-cols-2">
          {calcs.map((calc, idx) => (
            <a className="tw-capitalize tw-p-2 tw-text-brandingBlue-400 tw-font-bold tw-underline tw-text-lg" key={idx} href={calc.href}>{calc.text}</a>
          ))}
        </div>
      </Container>
    </SectionContent>
  )
}

export default CalculatorIndex;
