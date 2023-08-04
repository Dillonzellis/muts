type ColProps = {
  children: React.ReactNode;
};
const Col = ({ children }: ColProps) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-2 md:tw-mx-auto tw-items-center md:tw-items-start tw-text-center md:tw-text-start">
      {children}
    </div>
  );
};

export default Col;
