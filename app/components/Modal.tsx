type ModalProps = {
  modalClass: string;
  continueLink: string;
  id: string;
};

type ButtonProps = {
  children: React.ReactNode;
  cancel?: boolean;
  href: string;
};

const Button = ({ children, cancel, href }: ButtonProps) => {
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

const Modal = ({ modalClass, continueLink, id }: ModalProps) => {
  const cuName = "Mutual Savings Credit Union";
  const cancelHref = `wow-modal-close-${id}`;

  const containerPadding = "tw-px-3 md:tw-px-12";

  return (
    <div className={`${modalClass} tw-max-w-[662px] tw-border tw-rounded-md`}>
      <div className={`${containerPadding} tw-pt-6 tw-pb-4`}>
        <div className="tw-font-bold tw-text-xl tw-pb-4">Important Message</div>
        <div className="tw-text-sm md:tw-text-base">
          By accessing the noted link you will be leaving {cuName} website and
          entering a website hosted by another party. {cuName} has not approved
          this as a reliable partner site. Please be advised that you will no
          longer be subject to, or under the protection of, the privacy and
          security policies of {cuName} website. We encourage you to read and
          evaluate the privacy and security policies of the site you are
          entering, which may be different than those of {cuName}.
        </div>
      </div>
      <div className="tw-bg-brandingBlue-100 tw-py-6">
        <div
          className={`${containerPadding} tw-bg-brandingGrey-100 tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-gap-4`}
        >
          <Button cancel href={cancelHref}>
            Cancel
          </Button>
          <Button href={continueLink}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
