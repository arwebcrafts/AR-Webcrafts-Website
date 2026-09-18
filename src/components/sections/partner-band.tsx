import { CtaLink } from "@/components/ui/cta-link";

export function PartnerBand() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="flex flex-col items-start gap-5 rounded-3xl bg-brand-navy px-7 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-light">
            For agencies
          </p>
          <p className="mt-2 max-w-lg text-lg font-medium leading-snug text-white">
            Run an agency? We build under your brand — your clients never see us.
          </p>
        </div>
        <CtaLink href="/partners" variant="accent" className="shrink-0 px-6 py-3.5 text-sm">
          See the partner program
        </CtaLink>
      </div>
    </section>
  );
}
