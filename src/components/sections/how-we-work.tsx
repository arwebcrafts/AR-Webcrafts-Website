import { howWeWorkSteps } from "@/lib/data/services";
import { Reveal } from "@/components/motion/reveal";

export function HowWeWork() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">How we work</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Simple, transparent, no surprises
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWorkSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="flex h-full flex-col gap-3">
                <span className="font-heading text-3xl font-bold text-brand-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
