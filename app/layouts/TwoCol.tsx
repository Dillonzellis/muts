type TwoColProps = {
  children: React.ReactNode;
  center?: string;
};

const TwoCol = ({ children, center = "tw-items-center" }: TwoColProps) => {
  return (
    <div className={`tw-grid lg:tw-grid-cols-2 tw-gap-8 md:tw-gap-20 ${center}`}>
      {children}
    </div>
  );
};

export default TwoCol;
