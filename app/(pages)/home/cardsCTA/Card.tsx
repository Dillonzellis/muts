/* eslint-disable @next/next/no-img-element */
type CardProps = {
  icon: string;
  title: string;
  description?: string;
  cardLink?: string;
};

const Card = ({ icon, title, description, cardLink }: CardProps) => {
  return (
    <div className="tw-inline-flex tw-h-[316px] tw-rounded-3xl tw-border tw-border-slate-100 tw-bg-white tw-p-4 tw-text-black tw-shadow-xl">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-4">
        <img
          width={70}
          height={70}
          src={icon}
          alt=""
          className="tw-h-[70px] tw-w-[70px] tw-object-contain"
        />
        <div className="tw-text-xl tw-font-bold tw-capitalize tw-text-brandingBlue-400">
          {title}
        </div>
        <p className="tw-text-center">{description}</p>
        <div className="tw-font-bold tw-text-brandingGreen-400">
          <a href={cardLink}>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
