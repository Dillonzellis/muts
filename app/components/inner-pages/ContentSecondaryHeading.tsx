type ContentSecondaryHeadingProps = {
  title: string;
};

const ContentSecondaryHeading = ({ title }: ContentSecondaryHeadingProps) => {
  return <h4 className="tw-text-xl tw-font-semibold">{title}</h4>;
};

export default ContentSecondaryHeading;
