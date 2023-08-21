import Hero from "@/app/(pages)/home/Hero";
import JoinCTA from "@/app/(pages)/home/JoinCTA";
import CardsCTA from "@/app/(pages)/home/cardsCTA/CardsCTA";
import ServicesCTA from "@/app/(pages)/home/services/ServicesCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <CardsCTA />
      <JoinCTA />
      <ServicesCTA />
    </main>
  );
}
