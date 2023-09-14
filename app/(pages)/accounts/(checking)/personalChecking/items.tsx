import React from "react";
import LinkText from "@/app/components/LinkText";

const items: React.ReactNode[] = [
  <React.Fragment key="1">No monthly fees</React.Fragment>,
  <React.Fragment key="2">No per check charges</React.Fragment>,
  <React.Fragment key="3">No minimum balance requirements</React.Fragment>,
  <React.Fragment key="4">
    Dividend-earning on daily balances of $250+*
  </React.Fragment>,
  <React.Fragment key="5">
    <LinkText
      label="Direct deposit"
      href="https://dev2.growthbydesign.org/accounts/#direct-deposit"
    />
  </React.Fragment>,
  <React.Fragment key="6">
    <LinkText
      label="Payroll deduction"
      href="https://dev2.growthbydesign.org/accounts/#payroll-deduction"
    />
  </React.Fragment>,
  <React.Fragment key="7">
    Overdraft Protection or Courtesy Pay feature**
  </React.Fragment>,
  <React.Fragment key="9">
    <LinkText
      label="24/7 remote access"
      href="https://dev2.growthbydesign.org/solutions/#remote-banking"
    />
  </React.Fragment>,
  <React.Fragment key="10">
    <LinkText
      label="VISA® Debit Card w/SecureLock"
      href="https://dev2.growthbydesign.org/accounts/#debit-cards"
    />
  </React.Fragment>,
  <React.Fragment key="11">First order of checks Free</React.Fragment>,
];

export default items;
