type ContentColProps = {
  children: React.ReactNode;
  color?: string;
};

const ContentCol = ({ children, color }: ContentColProps) => {
  return <div className={`flex flex-col gap-4 ${color}`}>{children}</div>;
};

export default ContentCol;
