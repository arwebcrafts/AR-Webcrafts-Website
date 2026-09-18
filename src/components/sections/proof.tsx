import { portfolioProjects } from "@/lib/data/portfolio";
import { Reveal } from "@/components/motion/reveal";

const featuredProjects = portfolioProjects.filter((p) => p.featured);

export function Proof() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">Proof, not promises</p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          The work that speaks for itself
        </h2>
      </Reveal>

      {/* WebinarIgnition — flagship case study */}
      <Reveal delay={0.05}>
        <div className="mt-10 grid gap-8 rounded-3xl border border-border bg-card p-8 sm:grid-cols-[1.1fr_1fr] sm:p-10">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full bg-brand-gold-tint px-3 py-1 text-xs font-semibold text-brand-navy">
              Flagship product
            </span>
            <h3 className="font-heading text-2xl font-bold text-foreground">WebinarIgnition</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A commercial WordPress webinar platform competing directly with
              GoToWebinar and Demio. The client brought us in as a trial dev
              team — after the first few deliveries we took over all plugin
              development and have run it independently for 25+ months, zero
              handholding.
            </p>
            <a
              href="https://www.webinarignition.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-brand-navy"
            >
              Visit WebinarIgnition
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <dl className="grid grid-cols-2 gap-4 self-center rounded-2xl bg-secondary p-6">
            <div>
              <dt className="font-heading text-2xl font-bold text-brand-navy">25+</dt>
              <dd className="text-xs text-muted-foreground">months running it independently</dd>
            </div>
            <div>
              <dt className="font-heading text-2xl font-bold text-brand-navy">Trial → full</dt>
              <dd className="text-xs text-muted-foreground">ownership of dev &amp; maintenance</dd>
            </div>
          </dl>
        </div>
      </Reveal>

      {/* Website projects */}
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-card p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{project.type}</span>
              <h4 className="font-heading text-base font-semibold text-foreground">{project.name}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* SaaS case studies — pending client-supplied names/screenshots */}
      <Reveal delay={0.1}>
        <div className="mt-10">
          <p className="text-sm font-semibold text-foreground">SaaS builds</p>
          <div className="mt-4 grid gap-5 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex h-full min-h-[140px] flex-col items-start justify-between gap-2 rounded-2xl border border-dashed border-border bg-secondary/40 p-6"
              >
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  TODO
                </span>
                <p className="text-sm text-muted-foreground">
                  SaaS case study {n} — name, screenshot and description pending.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
