type ReportColsProps = {
  title: string;
  href: string;
  children: React.ReactNode;
}

const ReportCols = ({ title, href, children }: ReportColsProps) => {
  return (
    <div>
      <div><a className="tw-text-xl tw-font-bold" href={href}>{title}</a></div>
      {children}
    </div>
  )
}

export default ReportCols
