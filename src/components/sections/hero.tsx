import Image from "next/image";
import { CtaLink } from "@/components/ui/cta-link";

// Two alternate headline directions, kept here so swapping is a one-line change:
// "The senior dev team behind serious WordPress, WooCommerce and SaaS work"
// "Senior developers for websites, plugins and SaaS"
const HEADLINE = "WordPress, SaaS & Custom Development";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {/* static brand texture — no motion, just a deliberate gold wash in the corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-8%] h-[380px] w-[380px] rounded-full bg-brand-gold/20 blur-[100px] sm:h-[480px] sm:w-[480px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(1,15,33,0.4))]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-start gap-6 px-5 py-20 sm:px-8 sm:py-28">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-light">
          Plugins · WooCommerce · SaaS · Business websites
        </p>

        <h1
          className="animate-fade-up font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl"
          style={{ textWrap: "balance", animationDelay: "0.08s" }}
        >
          {HEADLINE}
        </h1>

        <p
          className="animate-fade-up max-w-xl text-lg leading-relaxed text-white/70"
          style={{ animationDelay: "0.16s" }}
        >
          Senior developers building WordPress plugins, WooCommerce stores,
          business websites and custom SaaS apps — all in-house, no juniors.
        </p>

        <div className="animate-fade-up flex flex-wrap gap-3 pt-2" style={{ animationDelay: "0.24s" }}>
          <CtaLink href="/contact" variant="accent" className="px-7 py-4 text-[15px]">
            Book a free call
          </CtaLink>
          <CtaLink href="/#proof" variant="ghost-light" className="px-7 py-4 text-[15px]">
            See our work
          </CtaLink>
        </div>

        <div
          className="animate-fade-up mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6"
          style={{ animationDelay: "0.32s" }}
        >
          <div className="flex items-baseline gap-1.5 text-sm">
            <span className="font-heading text-xl font-bold text-brand-gold-light">8+</span>
            <span className="text-white/60">years in business</span>
          </div>
          <div className="flex items-baseline gap-1.5 text-sm">
            <span className="font-heading text-xl font-bold text-brand-gold-light">30+</span>
            <span className="text-white/60">plugins shipped</span>
          </div>
          <Image src="/brand/clutch-rating.svg" alt="Clutch rating" width={110} height={47} className="h-11 w-auto opacity-95" />
          <Image src="/brand/google-rating.svg" alt="Google rating" width={110} height={48} className="h-11 w-auto opacity-95" />
        </div>
      </div>
    </section>
  );
}
