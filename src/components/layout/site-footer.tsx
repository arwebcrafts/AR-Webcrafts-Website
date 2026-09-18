import Image from "next/image";
import Link from "next/link";
import { footerCompanyLinks, footerServiceLinks } from "@/lib/data/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-brand-navy text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/brand/ar-webcrafts-logo.png"
              alt="AR WebCrafts"
              width={140}
              height={34}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              US-registered LLC with an in-house senior team. WordPress plugins,
              WooCommerce, business websites and custom SaaS — 8+ years, 30+
              commercial plugins shipped.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AR WebCrafts LLC. All rights reserved.</p>
          <p>Wyoming, USA · in-house senior team in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
