import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TransformationSection from "@/components/landing/TransformationSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import HowToUseSection from "@/components/landing/HowToUseSection";
import PlansSection from "@/components/landing/PlansSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TransformationSection />
      <HowItWorksSection />
      <SocialProofSection />
      <HowToUseSection />
      <PlansSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
