type AuxHeaderProps = {
  children: React.ReactNode
}

type AuxWrapperProps = {
  children: React.ReactNode
}

export const AuxHeader = ({ children }: AuxHeaderProps) => {
  return <div className="tw-text-2xl tw-text-brandingBlue-400 tw-font-semibold">{children}</div>
}

export const AuxWrapper = ({ children }: AuxWrapperProps) => {
  return <div className="tw-space-y-4">{children}</div>
}
