type ContentTertHeaderProps = {
  label: string,
}

const ContentTertHeader = ({ label }: ContentTertHeaderProps) => {
  return (
    <div className="tw-capitalize tw-text-lg tw-font-medium">{label}</div>
  )
}

export default ContentTertHeader;
