import SectionContent from "@/app/components/inner-pages/SectionContent";
import { feeHeaders, feeData, mmHeaders, mmData, webHeaders, webData } from "./fee-data";
import DataTable from "@/app/components/DataTable";
import Container from "@/app/layouts/Container";
import Disclaimer from "@/app/components/Disclaimer";
import SectionHeaders from "@/app/components/inner-pages/SectionHeaders";
import PageHeader from "@/app/components/inner-pages/PageHeader";

const FeeSchedule = () => {
  return (
    <SectionContent sectionName="fee-tables">
      <Container>
        <PageHeader title="Fee Schedule" />
        <div className="tw-flex tw-flex-col tw-gap-8">
          <DataTable
            headers={feeHeaders}
            data={feeData}
          />
          <DataTable
            headers={mmHeaders}
            data={mmData}
          />
          <DataTable
            headers={webHeaders}
            data={webData}
          />
          <div>
            <Disclaimer text="*Members will receive all ATM Transactions at no charge. CULIANCE and Publix Presto ATM transactions are permitted unlimited transactions at no additional charge." />
            <Disclaimer text="The fees appearing in this Schedule are accurate and effective for member accounts as of the Effective Date on this Fee Schedule. If you have any questions or require current rate and fee information on your accounts, please contact a credit union representative for assistance." />
          </div>
        </div>
      </Container>
    </SectionContent >
  )
}

export default FeeSchedule;
