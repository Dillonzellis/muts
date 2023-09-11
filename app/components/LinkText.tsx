type LinkTextProps = {
  label: string;
  href: string;
  dark?: boolean;
  underline?: boolean;
};

const LinkText = ({ label, href, dark, underline = true }: LinkTextProps) => {
  const colorClass = dark
    ? "hover:tw-text-brandingGreen-400"
    : "hover:tw-text-brandingBlue-400 ";

  const underlineClass = underline ? "tw-underline" : "";

  return (
    <a className={`tw-transition ${colorClass} ${underlineClass}`} href={href}>
      {label}
    </a>
  );
};

export default LinkText;
