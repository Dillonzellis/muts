type ContainerProps = {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="tw-container tw-mx-auto tw-max-w-[1180px] tw-px-6 md:tw-px-12">{children}</div>
  )
}

export default Container;
