import Link from "next/link";
import { homepageServices } from "@/lib/data/services";

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">What we build</p>
      <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        Four kinds of work, one senior team
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {homepageServices.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-[0_12px_30px_-14px_rgba(1,27,57,0.25)] motion-reduce:hover:translate-y-0"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-navy">
              Learn more
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
