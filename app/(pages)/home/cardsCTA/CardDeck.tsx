import Card from "./Card";

const CardDeck = () => {
  return (
    <div className="tw-left-[40%] tw-top-1/4 tw-mx-auto tw-mt-4 tw-grid tw-max-w-[800px] tw-gap-6 lg:tw-absolute lg:tw-top-[30%] lg:tw-mt-0 lg:tw-grid-cols-2 2xl:tw-top-1/4">
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/loans-icon.png"
        title="loan application"
        description="Whatever the need, big or small, we have the funds to help you cover it all!"
        cardLink="https://dev2.growthbydesign.org/loan-application/"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/car-icon.png"
        title="auto loans"
        description="Shopping for a car? We’ve got great rates on new, used, or refinanced auto loans!"
        cardLink="https://dev2.growthbydesign.org/borrow/#auto-loans"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/atm-icon.png"
        title="ATM/Shared Branching"
        description="Whether across town, or across the country, you can find an ATM or shared branch near you."
        cardLink="https://dev2.growthbydesign.org/solutions/#remote-banking"
      />
      <Card
        icon="http://dev2.growthbydesign.org/wp-content/uploads/cc-icon.png"
        title="Visa® Credit Cards"
        description="With a Visa® Platinum Rewards credit card, you can earn rewards points for every dollar you spend!"
        cardLink="https://dev2.growthbydesign.org/borrow/#credit-cards"
      />
    </div>
  );
};

export default CardDeck;
