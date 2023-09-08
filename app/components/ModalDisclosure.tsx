type ModalProps = {
  modalName: string;
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

const ModalDisclosure = ({ modalName, continueLink, id }: ModalProps) => {
  const cuName = "Mutual Savings Credit Union";
  const cancelHref = `wow-modal-close-${id}`;

  const containerPadding = "tw-px-3 md:tw-px-12";

  return (
    <div className={`${modalName} tw-max-w-[662px] tw-border tw-rounded-md`}>
      <div className={`${containerPadding} tw-pt-6 tw-pb-4`}>
        <div className="tw-font-bold tw-text-xl tw-pb-4">Important Message</div>
        <div className="tw-space-y-2 tw-text-sm md:tw-text-base">
          <div>
            I agree to do business with Mutual Savings Credit Union and to
            receive any applicable disclosures electronically.
          </div>
          <div>
            <strong>Note:</strong> E-mail users should be aware that the
            Internet is operated over an open channel; therefore, e-mail
            information is not guaranteed to be secure.
          </div>
        </div>
      </div>
      <div className="tw-bg-brandingBlue-100 tw-py-6">
        <div
          className={`${containerPadding} tw-bg-brandingGrey-100 tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-gap-4`}
        >
          <Button cancel href={cancelHref}>
            I Disagree
          </Button>
          <Button href={continueLink}>I Agree</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalDisclosure;
