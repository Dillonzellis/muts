/* eslint-disable @next/next/no-img-element */
type ContentImgProps = {
  ImgSrc: string;
  ImgAlt: string;
  order?: string;
  vertical?: boolean;
  rounded?: boolean;
};

const ContentImg = ({
  ImgSrc,
  ImgAlt,
  order,
  vertical,
  rounded = true,
}: ContentImgProps) => {
  const verticalClass = vertical
    ? "tw-max-h-[250px] tw-object-cover lg:tw-max-h-full"
    : "";

  const roundedClass = rounded
    ? "tw-rounded-2xl tw-shadow-2xl tw-shadow-brandingGrey-700/50 "
    : "";

  return (
    <>
      <img
        className={`tw-w-full tw-max-w-[503px] tw-mx-auto ${roundedClass} ${order} ${verticalClass}`}
        src={ImgSrc}
        alt={ImgAlt}
      />
    </>
  );
};

export default ContentImg;
