export type ColHeaderProps = {
  title: string;
};

const ColHeader = ({ title }: ColHeaderProps) => {
  return <div className="tw-uppercase tw-font-bold tw-pb-4">{title}</div>;
};

export default ColHeader;
