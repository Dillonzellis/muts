type ColProps = {
  children: React.ReactNode;
};
const Col = ({ children }: ColProps) => {
  return (
    <div className="flex flex-col gap-2 md:mx-auto items-center md:items-start text-center md:text-start">
      {children}
    </div>
  );
};

export default Col;
