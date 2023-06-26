type ContentBodyProps = {
  children: React.ReactNode;
};

const ContentBody = ({ children }: ContentBodyProps) => {
  return <div className="text-lg">{children}</div>;
};

export default ContentBody;
