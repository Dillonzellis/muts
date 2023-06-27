type ContentSecondaryHeadingProps = {
  title: string;
};

const ContentSecondaryHeading = ({ title }: ContentSecondaryHeadingProps) => {
  return <h4 className="text-xl font-semibold">{title}</h4>;
};

export default ContentSecondaryHeading;
