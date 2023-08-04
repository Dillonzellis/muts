type Props = {
  children: React.ReactNode;
  className?: string;
};

const ContentSection = ({ children, className = "" }: Props) => {
  return <div className={`tw-py-12 ${className}`}>{children}</div>;
};

export default ContentSection;
