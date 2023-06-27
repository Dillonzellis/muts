type TwoColProps = {
  children: React.ReactNode;
};

const TwoCol = ({ children }: TwoColProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-center">
      {children}
    </div>
  );
};

export default TwoCol;
