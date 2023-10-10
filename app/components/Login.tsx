import React from "react";
import Button from "./Button";
import LinkText from "./LinkText";

interface InputProps {
  type: "text" | "password";
}

interface LoginProps {
  isVisible: boolean;
}

export const InputHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="tw-text-lg tw-font-medium">{children}</div>;
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
      className={`login-de ${visibilityClass} tw-absolute tw-right-0 tw-z-[999] tw-mt-2 tw-flex tw-w-full tw-max-w-[400px] tw-flex-col tw-gap-4 tw-rounded-md tw-bg-brandingBlue-400 tw-p-4 tw-text-white tw-shadow-md`}
    >
      <div className="tw-text-center tw-text-2xl tw-font-semibold">
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
      <div className="tw-flex tw-flex-col tw-gap-1">
        <LinkText
          href="https://mutualsavings-dn.financial-net.com/web/Enrollment"
          label="Enroll In Online Banking"
          dark
          underline={false}
        />
        <LinkText
          href="https://dev2.growthbydesign.org/online-banking-instructions/"
          label="Online Banking Instructions"
          dark
          underline={false}
        />
        <LinkText
          href="https://mutualsavings-dn.financial-net.com/web/forgottenpassword"
          label="Reset Password"
          dark
          underline={false}
        />
      </div>
    </div>
  );
};

export default Login;
