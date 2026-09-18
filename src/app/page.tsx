import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { PartnerBand } from "@/components/sections/partner-band";
import { Proof } from "@/components/sections/proof";
import { Products } from "@/components/sections/products";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { generalFaqs } from "@/lib/data/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PartnerBand />
      <Proof />
      <Products />
      <HowWeWork />
      <WhyUs />
      <Testimonials />
      <Faq title="Common questions" items={generalFaqs} />
      <FinalCta
        heading="Let's talk about your project"
        subheading="30 minutes, free, direct with the developers who'd build it."
      />
    </>
  );
}
