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
    className: "md:tw-hidden",
  },
  {
    text: "accounts",
    link: "../accounts",
    subMenu: [
      {
        text: "Savings",
        link: "#",
        subMenu2: [
          {
            text: "Regular Savings",
            link: "#",
          },
          {
            text: "Money Market Accounts",
            link: "#",
          },
          {
            text: "Club Accounts",
            link: "",
          },
          {
            text: "Certificates of Deposit (CDs)",
            link: "IRAs",
          },
        ]
      },
      {
        text: "Checking",
        link: "#",
        subMenu2: [
          {
            text: "Personal Checking",
            link: "#"
          },
          {
            text: "Business Checking",
            link: "",
          },
        ]
      },
      {
        text: "Account Resources",
        link: "#",
        subMenu2: [
          {
            text: "Calculators",
            link: "#"
          },
          {
            text: "Deposit Rates",
            link: "",
          },
          {
            text: "Direct Deposit",
            link: "",
          },
          {
            text: "Payroll Deduction",
            link: "",
          },
          {
            text: "Fee Schedule",
            link: "",
          },
          {
            text: "Open Account",
            link: "",
          },
          {
            text: "Order Checks",
            link: "",
          },
          {
            text: "Stop Payment",
            link: "",
          },
          {
            text: "VISA® Debit Cards w/SecureLock",
            link: "",
          },
          {
            text: "Wire Funds",
            link: "",
          },
        ]
      },
    ],
  },
  {
    text: "borrow",
    link: "/borrow",
    subMenu: [
      {
        text: "Savings",
        link: "#",
        subMenu2: [
          {
            text: "Regular Savings",
            link: "#",
          },
          {
            text: "Money Market Accounts",
            link: "#",
          }
        ]
      },
      {
        text: "Checking",
        link: "#",
        subMenu2: [
          {
            text: "checking 1",
            link: "#"
          },
        ]
      },
      {
        text: "Account Resources",
        link: "#",
      },
    ],
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
