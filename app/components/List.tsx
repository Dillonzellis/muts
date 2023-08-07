import { CheckIcon } from "@heroicons/react/24/solid";

type ListProps = {
  liItems: React.ReactNode[];
};

const List = ({ liItems }: ListProps) => {
  return (
    <div className="tw-flex  tw-flex-col tw-gap-2">
      {liItems.map((item, index) => (
        <div key={index} className="tw-flex tw-gap-2">
          <CheckIcon className="tw-h-5 tw-w-5 tw-flex-shrink-0 tw-text-brandingGreen-400" />
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
};

export default List;


