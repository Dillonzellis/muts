import { feeHeaders, feeData } from "./fee-data";
import DataTable2 from "@/app/components/DataTable2";

const FeeSchedule = () => {
  return (
    <div>

      <DataTable2
        headers={[
          { key: 'accountType', label: 'Account Type' },
        ]}
        data={[
          {
            accountType: 'Regular Share Account',
            frequency: 'Quarterly',
            dividendRate: '0.05%',   // This column won't have a header
            annualPercentageYield: '0.05%'  // This column won't have a header
          }
        ]}
      />
    </div>
  )
}

export default FeeSchedule;
