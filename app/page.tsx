import { Hero } from "@/components/hero";
import { Solutions } from "@/components/solutions";
import { Industries } from "@/components/industries";
import { HowItWorks } from "@/components/how-it-works";
import { Comparison } from "@/components/comparison";
import { DemoForm } from "@/components/demo-form";
import { FAQ } from "@/components/faq";
import { CTABanner } from "@/components/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <Industries />
      <HowItWorks />
      <Comparison />
      <DemoForm />
      <FAQ />
      <CTABanner />
    </>
  );
}
