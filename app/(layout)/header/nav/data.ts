export type SubMenu = {
  text: string;
  link: string;
  subMenu2?: SubMenu[];
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
        text: "Savings",
        link: "#",
        subMenu2:[
          {
            text: "Regular Savings",
            link: "#",
          },
          {
            text: "fMoney Market Accounts",
            link: "#",
          }
        ]
      },
      {
        text: "Checking",
        link: "#",
      },
      {
        text: "Account Resources",
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
