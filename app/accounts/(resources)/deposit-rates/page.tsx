import DataTable from "@/app/components/DataTable";
import PageHeader from "@/app/components/inner-pages/PageHeader";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";
import { shareHeaders, shareData, cdHeaders, cdData } from "./rateData";
import Disclaimer from "@/app/components/Disclaimer";

const DepositRates = () => {
  return (
    <SectionContent sectionName="deposit-rates">
      <Container>
        <PageHeader title="Share Rates" />
        <div className="tw-flex tw-flex-col tw-gap-8">
          <div className="tw-text-xl tw-pb-2">Share Rates $5 minimum investment</div>
          <div>Annual Percentage Yield, rates and other terms may change at any time without prior notice. A penalty is imposed for early withdrawal. Fees could reduce earnings on the account.</div>
          <DataTable headers={shareHeaders} data={shareData} />
          <Disclaimer text="*Dividends will be compounded quarterly and will be credited quarterly. Average Daily Balance." />
          <PageHeader title="Regular & IRA Certificates of Deposit" />
          <div>Annual Percentage Yield, rates and other terms may change at any time without prior notice. $500.00 minimum required to open a Regular or IRA Certificate. After your certificate is opened, the dividend rate is fixed for the term. A penalty is imposed for early withdrawal. Fees could reduce earnings on the account.</div>
          <DataTable headers={cdHeaders} data={cdData} />
          <Disclaimer text="Dividends will be compounded daily and will be credited monthly." />
          <Disclaimer text="**Effective 8/1/23, the 13 Month CD Special is no longer available. The 13 Month CD will redeem to the savings account at maturity, or contact MSCU to reinvest. MSCU reserves the right to end or modify this offer at any time. Penalties apply for early withdrawals from certificate accounts. Other restrictions may apply." />
        </div>
      </Container>
    </SectionContent>
  )
}

export default DepositRates;
