import { CheckIcon } from "@heroicons/react/24/outline";

type CheckItemProps = {
  label: string;
};

const CheckItem = ({ label }: CheckItemProps) => {
  return (
    <div className="tw-flex tw-items-center tw-gap-4">
      <CheckIcon className="tw-h-5 tw-w-5 tw-text-brandingGreen-400" />
      <div>{label}</div>
    </div>
  );
};

export default CheckItem;
