import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WhoSection from "@/components/WhoSection";
import DifferenceSection from "@/components/DifferenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OffersSection from "@/components/OffersSection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProblemSection />
      <WhoSection />
      <DifferenceSection />
      <TestimonialsSection />
      <OffersSection />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
