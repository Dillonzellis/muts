import Button from "@/app/components/Button";

type SlideProps = {
  header: string;
  body: string;
  active: boolean;
  btnText?: string;
  link?: string;
};

export const Slide = ({ active = false, header, body }: SlideProps) => {
  return (
    <div className={`hero slide ${active ? "active" : ""}`}>
      <h1 className="tw-text-3xl tw-font-bold tw-capitalize tw-text-white md:tw-text-6xl">
        {header}
      </h1>
      <p className="tw-text-xl">{body}</p>
      <Button btnText="Apply Today" link="" />
    </div>
  );
};
