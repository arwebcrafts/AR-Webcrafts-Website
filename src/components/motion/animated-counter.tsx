"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(reduceMotion ? value : 0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView && !reduceMotion) {
      const controls = animate(count, value, { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const });
      return controls.stop;
    }
  }, [inView, value, count, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
