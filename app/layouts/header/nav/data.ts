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
    link: "",
    subMenu: [
      {
        text: "Savings",
        link: "",
        subMenu2: [
          {
            text: "Regular Savings",
            link: "/accounts/#regular-savings",
          },
          {
            text: "Money Market Accounts",
            link: "/accounts/#money-market-accounts",
          },
          {
            text: "Club Accounts",
            link: "/accounts/#club-accounts",
          },
          {
            text: "Certificates of Deposit (CDs)",
            link: "/accounts/#cds",
          },
          {
            text: "IRAs",
            link: "/accounts/#iras",
          },
          {
            text: "Coverdell Savings Accounts",
            link: "/accounts/#coverdell-savings-accounts",
          },
        ]
      },
      {
        text: "Checking",
        link: "#",
        subMenu2: [
          {
            text: "Personal Checking",
            link: "/accounts/#personal-checking"
          },
          {
            text: "Business Checking",
            link: "/accounts/#business-checking",
          },
        ]
      },
      {
        text: "Account Resources",
        link: "#",
        subMenu2: [
          {
            text: "Calculators",
            link: "/accounts/calculators"
          },
          {
            text: "Deposit Rates",
            link: "/accounts/deposit-rates",
          },
          {
            text: "Direct Deposit",
            link: "/accounts/#direct-deposit",
          },
          {
            text: "Payroll Deduction",
            link: "/accounts/#payroll-deduction",
          },
          {
            text: "Fee Schedule",
            link: "/accounts/fee-schedule",
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
            link: "/accounts/#debit-cards",
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
    link: "./borrow",
    subMenu: [
      {
        text: "Loans",
        link: "",
        subMenu2: [
          {
            text: "auto loans",
            link: "/borrow/#auto-loans",
          },
          {
            text: "boat, camper & motorcycle loans",
            link: "/borrow/#boats-camper-motorcycle-loans",
          },
          {
            text: "Home Loans",
            link: "/borrow/#home-loans",
          },
          {
            text: "Additional Consumer Loans",
            link: "/borrow/#additional-loans",
          },
          {
            text: "VISA® Rewards Platinum Credit Cards",
            link: "/borrow/#credit-cards",
          },
        ]
      },
      {
        text: "Lending Resources",
        link: "#",
        subMenu2: [
          {
            text: "Apply for a Loan",
            link: ""
          },
          {
            text: "Loan Rates",
            link: ""
          },
          {
            text: "Calculators",
            link: ""
          },
          {
            text: "Car Buying Service",
            link: ""
          },
          {
            text: "Credit Card Management",
            link: ""
          },
          {
            text: "GAP Coverage",
            link: "/borrow/#gap"
          },
          {
            text: "Payment Protection",
            link: "/borrow/#payment-protection"
          },
          {
            text: "MBI/Insurance",
            link: "/borrow/#mbi"
          },
          {
            text: "ScoreCard™ REWARDS",
            link: "/borrow/#score-card"
          },
        ]
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
