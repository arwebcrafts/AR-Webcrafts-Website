import { whyUsPoints } from "@/lib/data/services";

export function WhyUs() {
  return (
    <section className="bg-brand-navy py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-light">Why us</p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-white sm:text-4xl">
          What you actually get
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyUsPoints.map((point) => (
            <div key={point.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold text-brand-navy">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-white">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
