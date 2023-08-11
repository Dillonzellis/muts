type ContentHeaderWrapperProps = {
  children: React.ReactNode;
}

const ContentHeaderWrapper = ({ children }: ContentHeaderWrapperProps) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-2">
      {children}
    </div>
  )
}

export default ContentHeaderWrapper;
