/* eslint-disable @next/next/no-img-element */
type ContentImgProps = {
  ImgSrc: string;
  ImgAlt: string;
};

const ContentImg = ({ ImgSrc, ImgAlt }: ContentImgProps) => {
  return (
    <>
      <img className="rounded-md shadow-lg" src={ImgSrc} alt={ImgAlt} />
    </>
  );
};

export default ContentImg;
