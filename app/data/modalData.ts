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
    disclosure: true,
    name: "trustage-insurance",
    id: "3",
    continue:
      "https://www.trustage.com/add-insurance?orgIdentifier=000000003000&marketingCampaignCode=CBAD000003",
  },
];
