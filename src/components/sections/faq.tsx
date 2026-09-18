"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Faq({
  title,
  items,
}: {
  title: string;
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">FAQ</p>
      <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>

      <div className="mt-8 flex flex-col divide-y divide-border rounded-2xl border border-border">
        {items.map((faqItem, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={faqItem.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-heading text-[15px] font-semibold text-foreground">
                  {faqItem.question}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className={cn("shrink-0 text-brand-navy transition-transform", isOpen && "rotate-45")}
                >
                  <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
                style={{ display: "grid" }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faqItem.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
