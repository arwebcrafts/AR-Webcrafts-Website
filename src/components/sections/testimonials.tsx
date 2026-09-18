import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  const general = testimonials.filter((t) => t.audience === "general");

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">Testimonials</p>
      <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
        What clients say
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {general.map((t) => (
          <figure key={t.name} className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6">
            <blockquote className="text-sm leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto text-sm">
              <span className="font-semibold text-foreground">{t.name}</span>
              <span className="block text-muted-foreground">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
