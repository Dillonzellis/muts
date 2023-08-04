import { ArrowRightIcon } from "@heroicons/react/24/solid";

type ButtonProps = {
  btnText: string;
  link: string;
  variant?: "light";
  className?: string;
  arrow?: boolean;
};

const Button = ({
  btnText,
  link,
  className = "",
  arrow,
  variant,
}: ButtonProps) => {
  const bgColor =
    variant === "light"
      ? "tw-bg-white tw-text-brandingBlue-400"
      : "tw-bg-brandingGreen-400 tw-text-white";

  return (
    <div
      className={`${className} tw-self-start tw-inline-flex tw-cursor-pointer tw-items-center tw-gap-1 tw-px-8 tw-py-3 tw-capitalize ${bgColor}`}>
      <div>
        <a className="font-semibold" href={link}>
          {btnText}
        </a>
      </div>
      {arrow && (
        <div>
          <ArrowRightIcon className="tw-h-5 tw-w-5" />
        </div>
      )}
    </div>
  );
};

export default Button;
