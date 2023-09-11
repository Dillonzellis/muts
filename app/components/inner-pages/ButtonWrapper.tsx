import { cn } from "@/lib/utils";

type ButtonWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const ButtonWrapper = ({ children, className }: ButtonWrapperProps) => {
  return (
    <div className={cn("tw-flex tw-flex-wrap tw-gap-2", className)}>
      {children}
    </div>
  );
};

export default ButtonWrapper;
