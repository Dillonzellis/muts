type PageHeaderProps = {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="tw-text-3xl md:tw-text-5xl tw-pb-4 tw-font-bold tw-text-black">{title}</div>
  )
}

export default PageHeader;
