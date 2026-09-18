import { CtaLink } from "@/components/ui/cta-link";

// Two alternate headline directions, kept here so swapping is a one-line change:
// "The senior dev team behind serious WordPress, WooCommerce and SaaS work"
// "WordPress plugins, WooCommerce and SaaS — built by senior developers only"
const HEADLINE = "Senior developers for websites, plugins and SaaS";

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
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-light">
          WordPress · WooCommerce · SaaS
        </p>

        <h1
          className="font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl"
          style={{ textWrap: "balance" }}
        >
          {HEADLINE}
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-white/70">
          WordPress, WooCommerce, React/Next.js and custom SaaS, built by an
          all-senior in-house team.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <CtaLink href="/contact" variant="accent" className="px-7 py-4 text-[15px]">
            Book a free call
          </CtaLink>
          <CtaLink href="/#proof" variant="ghost-light" className="px-7 py-4 text-[15px]">
            See our work
          </CtaLink>
        </div>

        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/15 pt-6 text-sm">
          <div className="flex items-baseline gap-1.5">
            <dt className="font-heading text-xl font-bold text-brand-gold-light">8+</dt>
            <dd className="text-white/60">years in business</dd>
          </div>
          <div className="flex items-baseline gap-1.5">
            <dt className="font-heading text-xl font-bold text-brand-gold-light">30+</dt>
            <dd className="text-white/60">plugins shipped</dd>
          </div>
          <div className="flex items-baseline gap-1.5">
            <dt className="font-heading text-xl font-bold text-brand-gold-light">US</dt>
            <dd className="text-white/60">registered LLC</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
