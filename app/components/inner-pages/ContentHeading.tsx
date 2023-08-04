type ContentHeadingProps = {
  title: string;
};

const ContentHeading = ({ title }: ContentHeadingProps) => {
  return <h3 className="tw-text-4xl tw-font-semibold">{title}</h3>;
};

export default ContentHeading;
