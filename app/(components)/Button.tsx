import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface ButtonProps {
  btnText: string;
  link: string;
  variant?: "green" | "white";
  className?: string;
  arrow?: boolean;
}

const Button = ({
  btnText,
  link,
  className = "",
  arrow,
  variant,
}: ButtonProps) => {
  return (
    <div
      className={`${className} self-start inline-flex cursor-pointer items-center gap-1 bg-brandingGreen-400 px-8 py-3 capitalize text-white`}>
      <div>
        <a href={link}>{btnText}</a>
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
