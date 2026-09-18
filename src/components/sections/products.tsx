import { products } from "@/lib/data/products";
import { Reveal } from "@/components/motion/reveal";

const featuredProducts = products.filter((p) => p.featured);

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">Products</p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">
          30+ commercial plugins, shipped and maintained
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A sample of the LearnDash, WooCommerce and TutorLMS add-ons we build and support.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((product, i) => (
          <Reveal key={product.name} delay={i * 0.04}>
            <div className="flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-6">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy/70">
                {product.platform}
              </span>
              <h3 className="font-heading text-[15px] font-semibold text-foreground">{product.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
