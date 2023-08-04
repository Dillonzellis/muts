type TwoColProps = {
  children: React.ReactNode;
};

const TwoCol = ({ children }: TwoColProps) => {
  return (
    <div className="tw-grid lg:tw-grid-cols-2 tw-gap-8 md:tw-gap-20 tw-items-center">
      {children}
    </div>
  );
};

export default TwoCol;
