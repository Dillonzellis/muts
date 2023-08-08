import DataTable from "@/app/components/DataTable";
import PageHeader from "@/app/components/inner-pages/PageHeader";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import { shareHeaders, shareData } from "./rateData";
import Disclaimer from "@/app/components/Disclaimer";

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
          <div className="tw-max-w-[850px] tw-mx-auto tw-flex tw-flex-col tw-gap-2">
            <DataTable headers={shareHeaders} data={shareData} />
            <Disclaimer text="*Dividends will be compounded quarterly and will be credited quarterly. Average Daily Balance." />
          </div>
        </div>
      </Container>
    </SectionContent>
  )
}

export default DepositRates;
