import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import WhatYouGetSection from "@/components/sections/WhatYouGetSection";
import BonusSection from "@/components/sections/BonusSection";
import WhyItWorksSection from "@/components/sections/WhyItWorksSection";
import CostSection from "@/components/sections/CostSection";
import OfferSection from "@/components/sections/OfferSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import ClosingSection from "@/components/sections/ClosingSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGetSection />
      <BonusSection />
      <WhyItWorksSection />
      <CostSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
