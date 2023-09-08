type LinkTextProps = {
  label: string;
  href: string;
  dark?: boolean;
};

const LinkText = ({ label, href, dark }: LinkTextProps) => {
  const colorClass = dark
    ? "hover:tw-text-brandingGreen-400"
    : "hover:tw-text-brandingBlue-400 ";

  return (
    <a
      className={`tw-underline hover:tw-font-medium ${colorClass}`}
      href={href}
    >
      {label}
    </a>
  );
};

export default LinkText;
