import LinkText from "@/app/components/LinkText";
import React from "react";

const items: React.ReactNode[] = [
  <React.Fragment key="1">
    Establish membership with $5 minimum deposit{" "}
    <em>(Minimum $5 must remain in account)</em>
  </React.Fragment>,
  <React.Fragment key="2">
    <LinkText
      label="Dividend-bearing"
      href="https://dev2.growthbydesign.org/deposit-rates/"
    />
  </React.Fragment>,
  <React.Fragment key="3">Up to 6 free withdrawals/month</React.Fragment>,
  <React.Fragment key="4">
    <LinkText
      label="24/7 remote access"
      href="https://dev2.growthbydesign.org/solutions/#remote-banking"
    />
    <a href="#"></a>
  </React.Fragment>,
  <React.Fragment key="5">
    <LinkText
      label="Direct deposit"
      href="https://dev2.growthbydesign.org/accounts/#direct-deposit"
    />
  </React.Fragment>,
  <React.Fragment key="6">
    <a href="#"></a>
    <LinkText
      label="Payroll deduction"
      href="https://dev2.growthbydesign.org/accounts/#payroll-deduction"
    />
  </React.Fragment>,
];

export default items;
