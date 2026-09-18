"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/data/nav";
import { homepageServices } from "@/lib/data/services";
import { CtaLink } from "@/components/ui/cta-link";
import { cn } from "@/lib/utils";

const navLinkClass =
  "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-brand-gold after:transition-all after:duration-300 hover:after:w-full";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="hidden bg-brand-navy sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 text-xs text-white/70 sm:px-8">
          <a href="tel:+13072784862" className="transition-colors hover:text-white">
            +1 307 278 4862
          </a>
          <span>8+ years in business · 30+ plugins shipped</span>
        </div>
      </div>

      <div
        className={cn(
          "border-b bg-background/95 backdrop-blur-sm transition-shadow duration-200",
          scrolled ? "border-border shadow-[0_4px_20px_-8px_rgba(1,27,57,0.15)]" : "border-transparent",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image
              src="/brand/ar-webcrafts-logo.png"
              alt="AR WebCrafts"
              width={140}
              height={34}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={cn(navLinkClass, "flex items-center gap-1")}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  aria-hidden="true"
                  className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                >
                  <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                className={cn(
                  "absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 transition-all duration-200",
                  servicesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_16px_40px_-12px_rgba(1,27,57,0.2)]">
                  {homepageServices.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col gap-0.5 border-b border-border px-5 py-3.5 last:border-b-0 hover:bg-secondary/60"
                    >
                      <span className="text-sm font-semibold text-foreground">{service.title}</span>
                      <span className="text-xs text-muted-foreground">{service.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {primaryNav
              .filter((link) => link.label !== "Services")
              .map((link) => (
                <Link key={link.href} href={link.href} className={navLinkClass}>
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="hidden md:block">
            <CtaLink href="/contact" variant="accent" className="px-5 py-2.5 text-[13px]">
              Hire Us
            </CtaLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a href="tel:+13072784862" className="mt-3 block text-sm text-muted-foreground">
              +1 307 278 4862
            </a>
            <CtaLink href="/contact" variant="accent" className="mt-4 w-full">
              Hire Us
            </CtaLink>
          </div>
        )}
      </div>
    </header>
  );
}
