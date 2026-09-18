export type NavLink = {
  label: string;
  href: string;
};

// Routes for pages that don't exist yet are placeholders — Phase 1 only
// ships "/" and "/partners". They're real links now so the nav is ready
// to grow into them without another pass.
export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#proof" },
  { label: "Products", href: "/#products" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "WordPress plugins & WooCommerce", href: "/services/wordpress-plugins" },
  { label: "SaaS & web apps", href: "/services/saas-development" },
  { label: "Business websites", href: "/services/websites" },
  { label: "Dedicated developers", href: "/services/dedicated-developers" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/#proof" },
  { label: "Products", href: "/#products" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];
