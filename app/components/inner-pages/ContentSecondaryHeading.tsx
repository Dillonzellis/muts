type ContentSecondaryHeadingProps = {
  title: string;
  italic?: boolean;
};



const ContentSecondaryHeading = ({ title, italic }: ContentSecondaryHeadingProps) => {

  const italicClass = italic ? "tw-italic" : "";

  return <div className={`tw-text-xl tw-font-semibold ${italicClass}`.trim()}>{title}</div>;
};

export default ContentSecondaryHeading;
