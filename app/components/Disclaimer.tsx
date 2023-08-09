type DisclaimerProps = {
  text: string;
};

const Disclaimer = ({ text }: DisclaimerProps) => {
  return <div><em className="tw-italic tw-text-sm">{text}</em></div>;
};

export default Disclaimer;
