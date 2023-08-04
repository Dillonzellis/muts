type ContentColProps = {
  children: React.ReactNode;
  color?: string;
};

const ContentCol = ({ children, color }: ContentColProps) => {
  return <div className={`tw-flex tw-flex-col tw-gap-4 ${color}`}>{children}</div>;
};

export default ContentCol;
