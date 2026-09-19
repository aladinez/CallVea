import { Hero } from "@/components/hero";
import { CallSimulator } from "@/components/call-simulator";
import { Solutions } from "@/components/solutions";
import { Industries } from "@/components/industries";
import { Workflow } from "@/components/workflow";
import { PricingCalculator } from "@/components/pricing-calculator";
import { Comparison } from "@/components/comparison";
import { FAQ } from "@/components/faq";
import { CTABanner } from "@/components/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <CallSimulator />
      <Solutions />
      <Industries />
      <Workflow />
      <Comparison />
      <PricingCalculator />
      <FAQ />
      <CTABanner />
    </>
  );
}
