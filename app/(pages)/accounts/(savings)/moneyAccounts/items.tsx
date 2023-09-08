import React from "react";
import LinkText from "@/app/components/LinkText";

const items: React.ReactNode[] = [
  <React.Fragment key="1">
    <LinkText
      dark
      label="Dividend-bearing"
      href="https://dev2.growthbydesign.org/deposit-rates/"
    />
  </React.Fragment>,
  <React.Fragment key="2">Up to 6 free withdrawals/month</React.Fragment>,
  <React.Fragment key="3">
    <LinkText
      dark
      label="24/7 remote access"
      href="https://dev2.growthbydesign.org/solutions/#remote-banking"
    />
  </React.Fragment>,
  <React.Fragment key="4">
    <LinkText
      dark
      label="Direct deposit"
      href="https://dev2.growthbydesign.org/accounts/#direct-deposit"
    />
  </React.Fragment>,
  <React.Fragment key="5">
    <LinkText
      dark
      label="Payroll deduction"
      href="https://dev2.growthbydesign.org/accounts/#payroll-deduction"
    />
  </React.Fragment>,
];

export default items;
