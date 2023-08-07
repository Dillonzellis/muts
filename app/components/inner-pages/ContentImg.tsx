/* eslint-disable @next/next/no-img-element */
type ContentImgProps = {
  ImgSrc: string;
  ImgAlt: string;
  order?: string;
};

const ContentImg = ({ ImgSrc, ImgAlt, order }: ContentImgProps) => {
  return (
    <>
      <img className={`tw-w-full tw-max-w-[503px] tw-mx-auto tw-rounded-md tw-shadow-lg ${order}`} src={ImgSrc} alt={ImgAlt} />
    </>
  );
};

export default ContentImg;
