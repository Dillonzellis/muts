import DataTable from "@/app/components/DataTable";
import PageHeader from "@/app/components/inner-pages/PageHeader";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import { shareHeaders, shareData } from "./share-acct-data";

const DepositRates = () => {
  return (
    <SectionContent sectionName="deposit-rates">
      <Container>
        <PageHeader title="Share Rates" />
        <div className="tw-flex tw-flex-col tw-gap-8">
          <div>
            <div className="tw-text-xl tw-pb-2">Share Rates $5 minimum investment</div>
            <div>Annual Percentage Yield, rates and other terms may change at any time without prior notice. A penalty is imposed for early withdrawal. Fees could reduce earnings on the account.</div>
          </div>
          <DataTable headers={shareHeaders} data={shareData} />
        </div>
      </Container>
    </SectionContent>
  )
}

export default DepositRates;
