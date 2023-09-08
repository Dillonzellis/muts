import React from "react";
import LinkText from "@/app/components/LinkText";

const items: React.ReactNode[] = [
  <React.Fragment key="1">Open CD with minimum balance of $500</React.Fragment>,
  <React.Fragment key="2">
    <LinkText
      dark
      label="Fixed dividend for term"
      href="https://dev2.growthbydesign.org/deposit-rates/"
    />
  </React.Fragment>,
  <React.Fragment key="3">Available terms 3 – 60 months</React.Fragment>,
  <React.Fragment key="4">Can be used for IRAs</React.Fragment>,
  <React.Fragment key="5">
    <LinkText
      dark
      label="24/7 remote access"
      href="https://dev2.growthbydesign.org/solutions/#remote-banking"
    />
  </React.Fragment>,
  <React.Fragment key="6">
    <LinkText
      dark
      label="Direct deposit"
      href="https://dev2.growthbydesign.org/accounts/#direct-deposit"
    />
  </React.Fragment>,
  <React.Fragment key="7">
    <LinkText
      dark
      label="Payroll deduction"
      href="https://dev2.growthbydesign.org/accounts/#payroll-deduction"
    />
  </React.Fragment>,
];

export default items;
