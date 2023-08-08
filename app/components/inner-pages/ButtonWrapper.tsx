type ButtonWrapperProps = {
  children: React.ReactNode;
}

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return (
    <div className="tw-flex tw-flex-wrap tw-gap-2">
      {children}
    </div>
  )
}

export default ButtonWrapper;
