// Sourced from https://www.arwebcrafts.com/portfolio/
// `featured` marks the subset recommended for the homepage proof section —
// gambling/casino and academic-essay projects are excluded from `featured`
// for reputational reasons, but kept here since they are real, shipped work.

export type PortfolioProject = {
  name: string;
  summary: string;
  type: "WordPress site" | "WooCommerce" | "eLearning" | "Plugin";
  featured: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Best-One Mobile Phones",
    summary:
      "Responsive WordPress e-commerce site for mobile & laptop retail — clear filtering, detailed product descriptions and secure checkout.",
    type: "WooCommerce",
    featured: true,
  },
  {
    name: "Food Handler",
    summary:
      "WordPress eLearning platform for food-safety training. Secure online payments, live chat support, and group accounts for training large teams.",
    type: "eLearning",
    featured: true,
  },
  {
    name: "Scrap Buyer UAE",
    summary:
      "WordPress site streamlining the metal-scrapping process — expert guidance, secure transactions, blog, FAQs and WhatsApp chat.",
    type: "WordPress site",
    featured: true,
  },
  {
    name: "Scrap",
    summary:
      "Bilingual (Arabic & English) WordPress site simplifying responsible scrap-metal disposal, with blog posts and FAQs.",
    type: "WordPress site",
    featured: true,
  },
  {
    name: "Intercarrier",
    summary:
      "WordPress site with a custom enquiry form, Google reviews integration for credibility, and location maps.",
    type: "WordPress site",
    featured: true,
  },
  {
    name: "CF7 WOW Styler",
    summary: "Plugin that gives Contact Form 7 forms fast, styled layouts.",
    type: "Plugin",
    featured: false,
  },
  {
    name: "CasinoXL.uk",
    summary: "WordPress site for an online casino/gaming platform.",
    type: "WordPress site",
    featured: false,
  },
  {
    name: "All Academic Helpers",
    summary: "WordPress site for an academic-writing service.",
    type: "WordPress site",
    featured: false,
  },
];
