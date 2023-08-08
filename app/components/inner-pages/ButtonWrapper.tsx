type ButtonWrapperProps = {
  children: React.ReactNode;
}

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-flex-row">
      {children}
    </div>
  )
}

export default ButtonWrapper;
