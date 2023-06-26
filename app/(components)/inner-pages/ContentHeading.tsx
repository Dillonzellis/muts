type ContentHeadingProps = {
  title: string;
};

const ContentHeading = ({ title }: ContentHeadingProps) => {
  return <h3 className="text-4xl font-semibold">{title}</h3>;
};

export default ContentHeading;
