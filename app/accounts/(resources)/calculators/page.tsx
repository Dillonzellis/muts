import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import { calcs } from "./items";

const CalculatorIndex = () => {
  return (
    <SectionContent sectionName="financial-calculators">
      <Container>
        <div className="tw-text-3xl md:tw-text-5xl tw-pb-4 tw-font-bold tw-text-black">Financial Calculators</div>
        <div className="tw-text-xl md:tw-text-xl tw-italic tw-pb-8 tw-text-black">Calculate your savings, monthly payments & more!</div>
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
