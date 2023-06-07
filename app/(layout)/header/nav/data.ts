export type NavItem = {
  text: string;
  link: string;
  className?: string | null;
};

export const navItems: NavItem[] = [
  {
    text: "login",
    link: "#",
    className: "md:hidden",
  },
  {
    text: "accounts",
    link: "accounts",
  },
  {
    text: "borrow",
    link: "borrow",
  },
  {
    text: "solutions",
    link: "solutions",
  },
  {
    text: "about us",
    link: "about-us",
  },
];
