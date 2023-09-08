import React from "react";
import LinkText from "@/app/components/LinkText";

const items: React.ReactNode[] = [
  <React.Fragment key="1">New & used vehicles </React.Fragment>,
  <React.Fragment key="2">New purchase & refinance</React.Fragment>,
  <React.Fragment key="3">100% financing</React.Fragment>,
  <React.Fragment key="4">
    <LinkText
      dark
      label="Low, fixed rates"
      href="https://dev2.growthbydesign.org/loan-rates/"
    />
  </React.Fragment>,
  <React.Fragment key="5">
    Flexible payment options - <em className="tw-italic">Up to 180 months</em>
  </React.Fragment>,
  <React.Fragment key="6">Preapprovals </React.Fragment>,
];

export default items;
