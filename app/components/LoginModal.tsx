import type { ChildrenProps } from "@/lib/types";
import ModalButton from "./ModalBtn";

const InputHeader = ({ children }: ChildrenProps) => {
  return <div className="tw-font-medium tw-text-lg">{children}</div>;
};

const Input = ({ ...props }) => {
  return (
    <input className="tw-w-full tw-p-2 tw-text-black tw-border" {...props} />
  );
};

const InputWrapper = ({ children }: ChildrenProps) => {
  return <div className="tw-space-y-1">{children}</div>;
};

const LoginModal = () => {
  const containerPadding = "tw-px-3";

  return (
    <div className={`login-modal tw-max-w-[662px] tw-border tw-rounded-md`}>
      <div className={`${containerPadding} tw-pt-6 tw-pb-4`}>
        <div className="tw-font-bold tw-text-2xl tw-pb-4">Online Banking</div>
        <InputWrapper>
          <InputHeader>Login ID:</InputHeader>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <InputHeader>Security Code:</InputHeader>
          <Input type="password" />
        </InputWrapper>
      </div>
      <div className="tw-bg-brandingBlue-100 tw-py-6">
        <div
          className={`${containerPadding} tw-bg-brandingGrey-100 tw-flex tw-flex-col md:tw-flex-row tw-gap-2 md:tw-gap-4`}
        >
          <ModalButton cancel href="/#wow-modal-close-21">
            Cancel
          </ModalButton>
          <ModalButton href="/">Login</ModalButton>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
