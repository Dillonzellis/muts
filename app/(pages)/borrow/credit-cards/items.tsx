import LinkText from "@/app/components/LinkText";
import React from "react";

const creditItems: React.ReactNode[] = [
  <React.Fragment key="1">No Annual Fee</React.Fragment>,
  <React.Fragment key="2">Secured and unsecured fixed rates</React.Fragment>,
  <React.Fragment key="3">25-day grace period</React.Fragment>,
  <React.Fragment key="4">
    <LinkText label="ScoreCard™ REWARDS" href="/#wow-modal-id-9" />
  </React.Fragment>,
  <React.Fragment key="5">
    No transaction fee on cash advances from your credit union (interest accrues
    from the day of the advance)
  </React.Fragment>,
  <React.Fragment key="6">
    Optional life & disability insurance available at low rates
  </React.Fragment>,
  <React.Fragment key="7">
    <a href="www.ezcardinfo.com"></a>
    <LinkText label="Easy Online Card Management" href="/#wow-modal-id-10" />
  </React.Fragment>,
];

export default creditItems;
