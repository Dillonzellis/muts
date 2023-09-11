import ModalButton from "./ModalBtn";

type ModalProps = {
  disclosure?: boolean;
  modalName: string;
  continueLink: string;
  id: string;
};

const Modal = ({ disclosure, modalName, continueLink, id }: ModalProps) => {
  const cuName = "Mutual Savings Credit Union";
  const cancelHref = `wow-modal-close-${id}`;

  const containerPadding = "tw-px-3 md:tw-px-12";

  return (
    <div className={`${modalName} tw-max-w-[662px] tw-border tw-rounded-md`}>
      <div className={`${containerPadding} tw-pt-6 tw-pb-4`}>
        <div className="tw-font-bold tw-text-xl tw-pb-4">Important Message</div>
        {disclosure ? (
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
        ) : (
          <div className="tw-text-sm md:tw-text-base">
            By accessing the noted link you will be leaving {cuName} website and
            entering a website hosted by another party. {cuName} has not
            approved this as a reliable partner site. Please be advised that you
            will no longer be subject to, or under the protection of, the
            privacy and security policies of {cuName} website. We encourage you
            to read and evaluate the privacy and security policies of the site
            you are entering, which may be different than those of {cuName}.
          </div>
        )}
      </div>
      <div className="tw-bg-brandingBlue-100 tw-py-6">
        <div
          className={`${containerPadding} tw-bg-brandingGrey-100 tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-gap-4`}
        >
          <ModalButton cancel href={cancelHref}>
            {disclosure ? "I Disagree" : "Cancel"}
          </ModalButton>
          <ModalButton href={continueLink}>
            {disclosure ? "I Agree" : "Continue"}
          </ModalButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
