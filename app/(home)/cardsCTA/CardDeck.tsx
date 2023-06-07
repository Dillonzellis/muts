import Card from "./Card";

const CardDeck = () => {
  return (
    <div className="mx-auto mt-4 lg:mt-0 lg:absolute left-[40%] top-1/4 grid max-w-[800px] lg:grid-cols-2 gap-6">
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
