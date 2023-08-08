type RowData = { [key: string]: string };

type ColumnHeader = {
  key: string;
  label: string;
  className?: string;
};

type DataTableProps = {
  data: RowData[];
  headers: ColumnHeader[];
};

const DataTable = ({ data, headers }: DataTableProps) => {
  return (
    <div className="tw-w-full tw-max-w-[850px] tw-shadow-brandingGrey-700/10 tw-mx-auto tw-border tw-border-slate-50 tw-shadow-xl tw-rounded-xl tw-flex tw-flex-col">
      <div className="tw-overflow-x-auto">
        <div className="tw-inline-block tw-min-w-full">
          <div className="tw-overflow-hidden">
            <table className="tw-min-w-full tw-text-left tw-text-sm tw-font-light">
              <thead className="tw-font-medium tw-bg-brandingBlue-400 tw-text-white tw-text-lg">
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} scope="col" className={`${header.className} tw-px-6 tw-py-4`}>
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className="tw-transition tw-duration-300 tw-ease-in-out hover:tw-bg-neutral-100">
                    {headers.map((header, headerIndex) => (
                      <td key={headerIndex} className="tw-whitespace-nowrap tw-px-6 tw-py-4">
                        {row[header.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
