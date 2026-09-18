import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta({
  heading,
  subheading,
}: {
  heading: string;
  subheading: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <Reveal>
        <div className="rounded-3xl bg-brand-navy px-7 py-14 text-center sm:px-14">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">{subheading}</p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <CtaLink href="/contact" variant="accent" className="px-8 py-4 text-[15px]">
              Book a free call
            </CtaLink>
            <a href="tel:+13072784862" className="text-sm text-white/60 underline-offset-4 hover:text-white hover:underline">
              or call +1 307 278 4862
            </a>
          </div>

          {/* TODO: replace with the real Calendly embed once the URL is supplied */}
          <div className="mx-auto mt-8 max-w-md rounded-xl border border-dashed border-white/20 bg-white/5 px-5 py-4 text-xs text-white/50">
            TODO — Calendly embed goes here once you send the booking URL.
          </div>
        </div>
      </Reveal>
    </section>
  );
}
