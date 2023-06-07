type CardProps = {
  icon: string;
  title: string;
  description?: string;
  cardLink?: string;
};

const Card = ({
  icon,
  title,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, praesentium? Iure delectus officia reiciendis culpa facilis sequi explicabo expedita quia?",
  cardLink = "#",
}: CardProps) => {
  return (
    <div className="inline-flex h-[316px] rounded-3xl border border-slate-100 bg-white p-4 text-black shadow-xl">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* <img
          width={70}
          height={70}
          src={icon}
          alt=""
          className="h-[70px] w-[70px] object-contain"
        /> */}
        <div className="h-[70px] w-[70px] object-contain">temp</div>
        <div className="text-xl font-bold capitalize text-brandingBlue-400">
          {title}
        </div>
        <p className="text-center">{description}</p>
        <div className="font-bold text-brandingGreen-400">
          <a href={cardLink}>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
