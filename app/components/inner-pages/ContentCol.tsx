type ContentColProps = {
  children: React.ReactNode;
  color: string;
  order?: string;
};

const ContentCol = ({ children, color, order }: ContentColProps) => {
  return (
    <div className={`tw-flex tw-flex-col tw-gap-4 ${order} ${color}`}>
      {children}
    </div>
  );
};

export default ContentCol;
