type ContentColProps = {
  children: React.ReactNode;
};

const ContentCol = ({ children }: ContentColProps) => {
  return (
    <div className="flex flex-col gap-4 text-brandingGrey-700">{children}</div>
  );
};

export default ContentCol;
