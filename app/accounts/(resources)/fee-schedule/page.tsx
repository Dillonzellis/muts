import DataTable from "@/app/components/DataTable";
import { feeHeaders, feeData } from "./fee-data";

const FeeSchedule = () => {
  return (
    <div>
      <DataTable headers={feeHeaders} data={feeData} />
    </div>
  )
}

export default FeeSchedule;
