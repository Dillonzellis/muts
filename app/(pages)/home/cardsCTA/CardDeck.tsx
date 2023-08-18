import Card from "./Card";

const CardDeck = () => {
  return (
    <div className="tw-mx-auto tw-mt-4 lg:tw-mt-0 lg:tw-absolute tw-left-[40%] tw-top-1/4 tw-grid tw-max-w-[800px] lg:tw-grid-cols-2 tw-gap-6">
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/loans-icon.png"
        title="loan application"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/car-icon.png"
        title="auto loans"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/atm-icon.png"
        title="ATM/Shared Branching"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/fin-edu-icon.png"
        title="financial education"
      />
    </div>
  );
};

export default CardDeck;
