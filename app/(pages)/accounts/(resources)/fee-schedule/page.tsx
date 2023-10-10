import SectionContent from "@/app/components/inner-pages/SectionContent";
import {
  feeHeaders,
  feeData,
  mmHeaders,
  mmData,
  webHeaders,
  webData,
  memberFee,
  memberData,
  otherHeaders,
  otherData,
} from "./fee-data";
import DataTable from "@/app/components/DataTable";
import Container from "@/app/layouts/Container";
import Disclaimer from "@/app/components/Disclaimer";
import PageHeader from "@/app/components/inner-pages/PageHeader";

const FeeSchedule = () => {
  return (
    <SectionContent id="fee-schedule">
      <Container>
        <PageHeader title="Fee Schedule" />
        <div className="tw-flex tw-flex-col tw-gap-8">
          <DataTable headers={memberFee} data={memberData} />
          <DataTable headers={feeHeaders} data={feeData} />
          <DataTable headers={mmHeaders} data={mmData} />
          <DataTable headers={webHeaders} data={webData} />
          <DataTable headers={otherHeaders} data={otherData} />
          <div className="tw-space-y-4">
            <Disclaimer text="The fees appearing in this Schedule are accurate and effective for member accounts as of the Effective Date on this Fee Schedule. If you have any questions or require current rate and fee information on your accounts, please contact a credit union representative for assistance." />
            <Disclaimer text="*To be a member of MSCU in good standing, you must maintain a par value of $5.00 in your primary share savings account at all times. If you should fall below this minimum required balance, your account will be subject to account suspension, revocation, or membership privileges, and/or possible account closure." />
            <Disclaimer text="**Members will receive all ATM Transactions at no charge. CULIANCE and Publix Presto ATM transactions are permitted unlimited transactions at no additional charge." />
          </div>
        </div>
      </Container>
    </SectionContent>
  );
};

export default FeeSchedule;
