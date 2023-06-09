import Hero from "./(home)/Hero";
import JoinCTA from "./(home)/JoinCTA";
import CardsCTA from "./(home)/cardsCTA/CardsCTA";
import ServicesCTA from "./(home)/services/ServicesCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <CardsCTA />
      <JoinCTA />
      <ServicesCTA />
    </div>
  );
}
