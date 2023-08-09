type ContentHeadingProps = {
  title: string;
};

const ContentHeading = ({ title }: ContentHeadingProps) => {
  return <div className="tw-text-2xl md:tw-text-4xl tw-font-semibold">{title}</div>;
};

export default ContentHeading;
