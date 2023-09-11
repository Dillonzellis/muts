type ButtonProps = {
  children: React.ReactNode;
  cancel?: boolean;
  href: string;
};

const ModalButton = ({ children, cancel, href }: ButtonProps) => {
  const variantClass = cancel
    ? "tw-border-2 tw-border-brandingBlue-400 tw-text-brandingBlue-400 tw-bg-white"
    : "tw-bg-brandingBlue-400 tw-text-white";

  return (
    <a
      className={`${variantClass} tw-transition tw-transform hover:tw-scale-105 tw-justify-center tw-font-semibold tw-rounded-md tw-inline-flex tw-cursor-pointer tw-items-center tw-h-10 tw-px-12 tw-py-2 tw-capitalize`}
      href={href}
    >
      {children}
    </a>
  );
};

export default ModalButton;
