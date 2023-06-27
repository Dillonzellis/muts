export type SubMenu = {
  text: string;
  link: string;
};

export type NavItem = {
  text: string;
  link: string;
  className?: string;
  subMenu?: SubMenu[];
};

export const navItems: NavItem[] = [
  {
    text: "login",
    link: "#",
    className: "md:hidden",
  },
  {
    text: "accounts",
    link: "../accounts",
    subMenu: [
      {
        text: "link 1",
        link: "#",
      },
      {
        text: "link 2",
        link: "#",
      },
      {
        text: "link 3",
        link: "#",
      },
      {
        text: "link 4",
        link: "#",
      },
    ],
  },
  {
    text: "borrow",
    link: "/borrow",
  },
  {
    text: "solutions",
    link: "/solutions",
  },
  {
    text: "rates",
    link: "/rates",
  },
  {
    text: "about us",
    link: "/about-us",
  },
];
