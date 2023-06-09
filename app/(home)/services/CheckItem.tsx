import { CheckIcon } from "@heroicons/react/24/outline";

const CheckItem = () => {
  return (
    <div className="flex items-center gap-4">
      <CheckIcon className="h-5 w-5 text-brandingGreen-400" />
      <div>Free Checking Accounts</div>
    </div>
  );
};

export default CheckItem;
