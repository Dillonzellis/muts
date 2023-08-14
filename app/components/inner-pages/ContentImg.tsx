/* eslint-disable @next/next/no-img-element */
type ContentImgProps = {
  ImgSrc: string;
  ImgAlt: string;
  order?: string;
  vertical?: boolean;
};

const ContentImg = ({ ImgSrc, ImgAlt, order, vertical }: ContentImgProps) => {

  const verticalClass = vertical ? "tw-max-h-[250px] tw-object-cover lg:tw-max-h-full" : ""

  return (
    <>
      <img className={`tw-w-full tw-max-w-[503px] tw-mx-auto tw-rounded-2xl tw-shadow-2xl tw-shadow-brandingGrey-700/50 ${order} ${verticalClass}`} src={ImgSrc} alt={ImgAlt} />
    </>
  );
};

export default ContentImg;
