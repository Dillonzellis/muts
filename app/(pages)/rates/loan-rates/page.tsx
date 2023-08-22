import DataTable from "@/app/components/DataTable";
import PageHeader from "@/app/components/inner-pages/PageHeader";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import { loanHeaders, loanData } from "./rateData";
import Disclaimer from "@/app/components/Disclaimer";

const DepositRates = () => {
  return (
    <SectionContent sectionName="loan-rates">
      <Container>
        <div className="tw-flex tw-flex-col tw-gap-6">
          <PageHeader title="Current Loan Rates" />
          <DataTable headers={loanHeaders} data={loanData} />
          <Disclaimer text="Programs, rates, terms and conditions are subject to change without notice" />
        </div>
      </Container>
    </SectionContent>
  )
}

export default DepositRates;
