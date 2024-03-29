import { ArrowRightIcon } from "@heroicons/react/24/solid";

type ButtonProps = {
  btnText: string;
  link: string;
  variant?: "light";
  className?: string;
  arrow?: boolean;
  selfStart?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button = ({
  btnText,
  link,
  className = "",
  arrow,
  variant,
  selfStart = true,
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  const bgColor =
    variant === "light"
      ? "tw-bg-white tw-text-brandingBlue-400"
      : "tw-bg-brandingGreen-400 tw-text-white";

  const selfStartClass = selfStart ? "tw-self-start" : "";

  const widthClass = fullWidth ? "tw-w-full tw-justify-center" : "";

  return (
    <div
      onClick={onClick}
      className={`${className} ${selfStartClass} ${widthClass} tw-rounded-md tw-inline-flex tw-cursor-pointer tw-items-center tw-gap-1 tw-h-10 tw-px-4 tw-py-2 tw-capitalize ${bgColor} tw-transition tw-transform hover:tw-scale-105`}
    >
      <div>
        <a className="tw-font-medium" href={link}>
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
