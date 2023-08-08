import PageHeader from "@/app/components/inner-pages/PageHeader";
import SectionContent from "@/app/components/inner-pages/SectionContent";
import Container from "@/app/layouts/Container";

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
          <div className="tw-max-w-full tw-max-w-[850px] tw-shadow-brandingGrey-700/10 tw-mx-auto tw-border tw-border-slate-50 tw-shadow-xl tw-rounded-xl tw-flex tw-flex-col">
            <div className="tw-overflow-x-auto">
              <div className="tw-inline-block tw-min-w-full">
                <div className="tw-overflow-hidden">
                  <table className="tw-min-w-full tw-text-left tw-text-sm tw-font-light">
                    <thead className="tw-font-medium tw-bg-brandingBlue-400 tw-text-white md:tw-text-lg">
                      <tr>
                        <th scope="col" className="tw-rounded-tl-xl tw-px-6 tw-py-4">Account Type</th>
                        <th scope="col" className="tw-px-6 tw-py-4">Frequency</th>
                        <th scope="col" className="tw-px-6 tw-py-4">Dividend Rate</th>
                        <th scope="col" className="tw-rounded-tr-xl tw-px-6 tw-py-4">Annual Percentage Yield</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-neutral-100">
                        <td className="tw-whitespace-nowrap tw-px-6 tw-py-4">Regular Share Account</td>
                        <td className="tw-whitespace-nowrap tw-px-6 tw-py-4">Quarterly</td>
                        <td className="tw-whitespace-nowrap tw-px-6 tw-py-4">0.05%</td>
                        <td className="tw-whitespace-nowrap tw-px-6 tw-py-4">0.05%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

    </SectionContent>
  )
}

export default DepositRates;
