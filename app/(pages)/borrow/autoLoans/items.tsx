import React from "react";
import LinkText from "@/app/components/LinkText";

const items: React.ReactNode[] = [
  <React.Fragment key="1">New & used vehicles </React.Fragment>,
  <React.Fragment key="2">New purchase & refinance</React.Fragment>,
  <React.Fragment key="3">100% financing</React.Fragment>,
  <React.Fragment key="4">
    <LinkText
      label="Low, fixed rates"
      href="https://dev2.growthbydesign.org/loan-rates/"
    />
  </React.Fragment>,
  <React.Fragment key="5">Flexible payment options</React.Fragment>,
  <React.Fragment key="6">Preapprovals </React.Fragment>,
  <React.Fragment key="7">
    <LinkText label="Car Buying Service" href="/#wow-modal-id-2" />
  </React.Fragment>,
  <React.Fragment key="8">
    <a href=""></a>
    <LinkText
      label="Loan protection & insurance options from TruStage**"
      href="/#wow-modal-id-3"
    />
  </React.Fragment>,
  <React.Fragment key="9">GAP coverage**</React.Fragment>,
];

export default items;
