import React from "react";
import Button from "./Button";

interface InputProps {
  type: "text" | "password";
}

interface LoginProps {
  isVisible: boolean;
}

export const InputHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="tw-font-medium tw-text-lg">{children}</div>;
};

export const InputWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="tw-space-y-1">{children}</div>;
};

export const Input: React.FC<InputProps> = ({ type }) => {
  return <input className="tw-w-full tw-p-2 tw-text-black" type={type} />;
};

const Login: React.FC<LoginProps> = ({ isVisible }) => {
  const visibilityClass = isVisible ? "show" : "";

  return (
    <div
      className={`login-de ${visibilityClass} tw-z-[999] tw-right-0 tw-absolute tw-rounded-md tw-flex tw-flex-col tw-gap-4 tw-shadow-md tw-mt-2 tw-max-w-[400px] tw-p-4 tw-bg-brandingBlue-400 tw-text-white`}
    >
      <div className="tw-text-2xl tw-font-semibold tw-text-center">
        Online Banking
      </div>
      <InputWrapper>
        <InputHeader>Login ID:</InputHeader>
        <Input type="text" />
      </InputWrapper>
      <InputWrapper>
        <InputHeader>Security Code:</InputHeader>
        <Input type="password" />
      </InputWrapper>
      <Button btnText="Log In" link="#" fullWidth />
    </div>
  );
};

export default Login;
