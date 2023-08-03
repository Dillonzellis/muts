type Props = {
  children: React.ReactNode;
  className?: string;
};

const ContentSection = ({ children, className = "" }: Props) => {
  return <section className={`tw-py-12 ${className}`}>{children}</section>;
};

export default ContentSection;
