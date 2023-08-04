export type ColLinkProps = {
  linkText: string;
  href: string;
  key: React.Key;
};

const ColLink = ({ linkText, href, key }: ColLinkProps) => {
  return (
    <div key={key}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </div>
  );
};

export default ColLink;
