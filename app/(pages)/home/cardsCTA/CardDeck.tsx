import Card from "./Card";

const CardDeck = () => {
  return (
    <div className="tw-mx-auto tw-mt-4 lg:tw-mt-0 lg:tw-absolute tw-left-[40%] tw-top-1/4 tw-grid tw-max-w-[800px] lg:tw-grid-cols-2 tw-gap-6">
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/loans-icon.png"
        title="loan application"
        description="Whatever the need, big or small, we have the funds to help you cover it all! Apply for the loan you need today."
        cardLink="https://dev2.growthbydesign.org/loan-application/"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/car-icon.png"
        title="auto loans"
        description="Shopping for a car? We’ve got great rates on new, used, or refinanced auto loans!"
        cardLink="https://dev2.growthbydesign.org/loan-application/"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/atm-icon.png"
        title="ATM/Shared Branching"
        description="We’re always within reach! Whether across town, or across the country, you can find an ATM or shared branch near you."
        cardLink="https://dev2.growthbydesign.org/solutions/#remote-banking"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/cc-icon.png"
        title="Visa® Credit Cards"
        description="Spend & earn! With a Visa® Platinum Rewards credit card, you can earn rewards points for every dollar you spend!"
        cardLink="https://dev2.growthbydesign.org/borrow/#credit-cards"
      />
    </div>
  );
};

export default CardDeck;
