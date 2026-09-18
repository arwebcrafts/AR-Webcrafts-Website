import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Variant = "primary" | "accent" | "ghost" | "ghost-light";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-brand-navy-ink",
  accent: "bg-accent text-accent-foreground hover:bg-brand-gold-light",
  ghost:
    "bg-transparent text-primary border border-border hover:border-primary/40 hover:bg-secondary",
  "ghost-light":
    "bg-white/10 text-white border border-white/25 hover:bg-white/20",
};

export function CtaLink({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
