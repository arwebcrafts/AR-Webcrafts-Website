import { whyUsPoints } from "@/lib/data/services";
import { Reveal } from "@/components/motion/reveal";

export function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">Why us</p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          What you actually get
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {whyUsPoints.map((point, i) => (
          <Reveal key={point.title} delay={i * 0.05}>
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold-tint text-brand-navy">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">{point.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
