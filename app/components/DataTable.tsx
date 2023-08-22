
type TableHeader = {
  key: string;
  label: string;
  className?: string;
};

type TableRowData = {
  [key: string]: string;
};

type DataTableProps = {
  headers: TableHeader[];
  data: TableRowData[];
};


const DataTable: React.FC<DataTableProps> = ({ headers, data }) => {
  const maxDataColumns = Math.max(...data.map(row => Object.keys(row).length));

  const widthClass = 'tw-max-w-[250px] tw-break-words'

  return (
    <div className="data-table tw-rounded-xl tw-w-full tw-max-w-[1180px] tw-mx-auto tw-shadow-xl tw-shadow-brandingGrey-700/7">
      <div className="tw-w-full tw-overflow-x-auto">
        <table className="tw-w-full tw-text-left tw-text-sm tw-font-light">
          <thead className="tw-font-medium tw-bg-brandingBlue-400 tw-text-white tw-text-lg">
            <tr>
              {headers.map(header => (
                <th key={header.key} className={`${header.className} tw-px-6 tw-py-4 ${widthClass}`}
                  colSpan={maxDataColumns / headers.length}>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-neutral-100">
                {Object.values(row).map((value, cellIndex) => (
                  <td key={cellIndex} className={`tw-px-6 tw-py-4 ${widthClass}`}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
