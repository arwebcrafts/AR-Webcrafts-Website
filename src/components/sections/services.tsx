import Link from "next/link";
import { homepageServices } from "@/lib/data/services";
import { Reveal } from "@/components/motion/reveal";

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">What we build</p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Four kinds of work, one senior team
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {homepageServices.map((service, i) => (
          <Reveal key={service.href} delay={i * 0.06}>
            <Link
              href={service.href}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-all hover:border-brand-gold/50 hover:shadow-[0_8px_30px_-12px_rgba(1,27,57,0.15)]"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-navy transition-transform group-hover:translate-x-0.5">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
