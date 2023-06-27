type DisclaimerProps = {
  text: string;
};

const Disclaimer = ({ text }: DisclaimerProps) => {
  return <em className="italic text-sm">{text}</em>;
};

export default Disclaimer;
