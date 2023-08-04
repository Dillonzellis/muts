type DisclaimerProps = {
  text: string;
};

const Disclaimer = ({ text }: DisclaimerProps) => {
  return <em className="tw-italic tw-text-sm">{text}</em>;
};

export default Disclaimer;
