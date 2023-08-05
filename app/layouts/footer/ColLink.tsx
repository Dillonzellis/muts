export type ColLinkProps = {
  linkText: string;
  href: string;
};

const ColLink = ({ linkText, href }: ColLinkProps) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </div>
  );
};

export default ColLink;
