type ContentBodyProps = {
  children: React.ReactNode;
};

const ContentBody = ({ children }: ContentBodyProps) => {
  return <div className="tw-max-w-prose tw-text-lg">{children}</div>;
};

export default ContentBody;
