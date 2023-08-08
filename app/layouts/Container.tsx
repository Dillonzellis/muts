type ContainerProps = {
  children: React.ReactNode;
  size?: "small" | "large"
}

const Container = ({ children, size }: ContainerProps) => {

  let maxWidth = 'tw-max-w-[1180px]';
  if (size === "small") maxWidth = 'tw-max-w-[850px]'
  if (size === "large") maxWidth = 'tw-max-w-[1400px]'


  return (
    <div className={`tw-container tw-mx-auto ${maxWidth} tw-px-6 md:tw-px-12`}>{children}</div>
  )
}

export default Container;
