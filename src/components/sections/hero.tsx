"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { CtaLink } from "@/components/ui/cta-link";
import { AnimatedCounter } from "@/components/motion/animated-counter";

// Two alternate headline directions, kept here so swapping is a one-line change:
// "The senior dev team behind serious WordPress, WooCommerce and SaaS work"
// "WordPress plugins, WooCommerce and SaaS — built by senior developers only"
const HEADLINE = "Senior developers for websites, plugins and SaaS";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
} satisfies Variants;
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
} satisfies Variants;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream to-background">
      {/* standout moment: a slow-drifting glow behind the headline */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-gold/25 blur-[110px] sm:h-[520px] sm:w-[520px]"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 24, 0], y: [0, 18, 0] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        className="relative mx-auto flex max-w-4xl flex-col items-start gap-6 px-5 py-20 sm:px-8 sm:py-28"
      >
        <motion.p
          variants={reduceMotion ? undefined : item}
          className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold"
        >
          WordPress · WooCommerce · SaaS
        </motion.p>

        <motion.h1
          variants={reduceMotion ? undefined : item}
          className="font-heading text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl md:text-6xl"
          style={{ textWrap: "balance" }}
        >
          {HEADLINE}
        </motion.h1>

        <motion.p
          variants={reduceMotion ? undefined : item}
          className="max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          WordPress, WooCommerce, React/Next.js and custom SaaS, built by an
          all-senior in-house team.
        </motion.p>

        <motion.div variants={reduceMotion ? undefined : item} className="flex flex-wrap gap-3 pt-2">
          <CtaLink href="/contact" variant="primary" className="px-7 py-4 text-[15px]">
            Book a free call
          </CtaLink>
          <CtaLink href="/#proof" variant="ghost" className="px-7 py-4 text-[15px]">
            See our work
          </CtaLink>
        </motion.div>

        <motion.dl
          variants={reduceMotion ? undefined : item}
          className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-sm"
        >
          <div className="flex items-baseline gap-1.5">
            <dt className="font-heading text-xl font-bold text-brand-navy">
              <AnimatedCounter value={8} suffix="+" />
            </dt>
            <dd className="text-muted-foreground">years in business</dd>
          </div>
          <div className="flex items-baseline gap-1.5">
            <dt className="font-heading text-xl font-bold text-brand-navy">
              <AnimatedCounter value={30} suffix="+" />
            </dt>
            <dd className="text-muted-foreground">plugins shipped</dd>
          </div>
          <div className="flex items-baseline gap-1.5">
            <dt className="font-heading text-xl font-bold text-brand-navy">
              <AnimatedCounter value={6} />
            </dt>
            <dd className="text-muted-foreground">senior developers</dd>
          </div>
          <div className="flex items-baseline gap-1.5">
            <dt className="font-heading text-xl font-bold text-brand-navy">US</dt>
            <dd className="text-muted-foreground">registered LLC</dd>
          </div>
        </motion.dl>
      </motion.div>
    </section>
  );
}
