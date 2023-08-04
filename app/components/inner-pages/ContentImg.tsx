/* eslint-disable @next/next/no-img-element */
type ContentImgProps = {
  ImgSrc: string;
  ImgAlt: string;
};

const ContentImg = ({ ImgSrc, ImgAlt }: ContentImgProps) => {
  return (
    <>
      <img className="tw-rounded-md tw-shadow-lg" src={ImgSrc} alt={ImgAlt} />
    </>
  );
};

export default ContentImg;
