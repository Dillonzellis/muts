export type ColHeaderProps = {
  title: string;
};

const ColHeader = ({ title }: ColHeaderProps) => {
  return <div className="uppercase font-bold pb-4">{title}</div>;
};

export default ColHeader;
