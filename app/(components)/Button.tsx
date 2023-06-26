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
      ? "bg-white text-brandingBlue-400"
      : "bg-brandingGreen-400 text-white";

  return (
    <div
      className={`${className} self-start inline-flex cursor-pointer items-center gap-1 px-8 py-3 capitalize ${bgColor}`}>
      <div>
        <a className="font-semibold" href={link}>
          {btnText}
        </a>
      </div>
      {arrow && (
        <div>
          <ArrowRightIcon className="h-5 w-5" />
        </div>
      )}
    </div>
  );
};

export default Button;
