export type ColLinkProps = {
  linkText: string;
  href: string;
};

const ColLink = ({ linkText, href }: ColLinkProps) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="tw-transition hover:tw-text-brandingGreen-400"
      >
        {linkText}
      </a>
    </div>
  );
};

export default ColLink;
