type LinkTextProps = {
  label: string,
  href: string,
}

const LinkText = ({ label, href }: LinkTextProps) => {
  return (
    <a className="tw-underline tw-font-medium" href={href}>{label}</a>
  )
}

export default LinkText;
