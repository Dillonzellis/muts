type modalDataType = {
  disclosure?: boolean;
  name: string;
  id: string;
  continue: string;
};

export const modalData: modalDataType[] = [
  {
    name: "atm-locator",
    id: "1",
    continue: "https://www.culiance.com/en/atmlocator",
  },
  {
    name: "auto-search",
    id: "2",
    continue: "http://cuautosearch.com/",
  },
  {
    name: "trustage-insurance",
    id: "3",
    continue:
      "https://www.trustage.com/add-insurance?orgIdentifier=000000003000&marketingCampaignCode=CBAD000003",
  },
  {
    name: "checks-deluxe",
    id: "4",
    continue: "https://orderpoint.deluxe.com/personal-checks/welcome.htm",
  },
  {
    disclosure: true,
    name: "stop-payment",
    id: "5",
    continue:
      "http://dev2.growthbydesign.org/wp-content/uploads/stop-payment.pdf",
  },
  {
    disclosure: true,
    name: "wire-transfer",
    id: "6",
    continue: "http://dev2.growthbydesign.org/wp-content/uploads/wire.pdf",
  },
  {
    disclosure: true,
    name: "payroll-deduction",
    id: "7",
    continue:
      "http://dev2.growthbydesign.org/wp-content/uploads/payroll-deduction.pdf",
  },
  {
    disclosure: true,
    name: "dispute-form",
    id: "8",
    continue:
      "http://dev2.growthbydesign.org/wp-content/uploads/CreditCardDisputeForm.pdf",
  },
  {
    name: "score-card-rewards",
    id: "9",
    continue: "https://www.scorecardrewards.com/#/home",
  },
  {
    name: "ezcard",
    id: "10",
    continue: "https://www.ezcardinfo.com/",
  },
  {
    name: "shared-branch-locator",
    id: "11",
    continue: "https://co-opcreditunions.org/locator/",
  },
  {
    name: "equifax",
    id: "12",
    continue: "https://www.equifax.com/",
  },
  {
    name: "experian",
    id: "13",
    continue: "https://www.experian.com/",
  },
  {
    name: "transunion",
    id: "14",
    continue: "https://www.transunion.com/",
  },
  {
    name: "id-theft",
    id: "15",
    continue: "https://www.identitytheft.gov/",
  },
];
