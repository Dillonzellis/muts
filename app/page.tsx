import Hero from "./home/Hero";
import JoinCTA from "./home/JoinCTA";
import CardsCTA from "./home/cardsCTA/CardsCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <CardsCTA />
      <JoinCTA />
    </main>
  );
}
