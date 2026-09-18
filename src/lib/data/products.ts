// Sourced from https://www.arwebcrafts.com/products/
// `featured` marks a representative subset for the homepage products grid.
// The full catalog (30+ plugins) belongs on a future /products page.

export type Product = {
  name: string;
  summary: string;
  platform: "LearnDash" | "WooCommerce" | "TutorLMS" | "LifterLMS";
  featured: boolean;
};

export const products: Product[] = [
  {
    name: "LearnDash Certificate Verify & Share",
    summary:
      "Let students share their LearnDash certificates on LinkedIn, Facebook and Twitter, with public verification.",
    platform: "LearnDash",
    featured: true,
  },
  {
    name: "LearnDash Quiz & Certificate Monetization",
    summary: "Sell access to individual lessons and topics.",
    platform: "LearnDash",
    featured: true,
  },
  {
    name: "LearnDash Multi Certificates",
    summary: "Award multiple certificates for a single quiz.",
    platform: "LearnDash",
    featured: false,
  },
  {
    name: "LearnDash Focus Mode Pro",
    summary: "Customize visible elements on lesson, topic and quiz pages.",
    platform: "LearnDash",
    featured: false,
  },
  {
    name: "LearnDash Quiz Reports Pro",
    summary: "Advanced analytics with custom CSV export.",
    platform: "LearnDash",
    featured: true,
  },
  {
    name: "WooCommerce Bulk Edit Products",
    summary: "Edit store products in bulk with an extensive filtering system.",
    platform: "WooCommerce",
    featured: true,
  },
  {
    name: "WooCommerce Min Max Quantities",
    summary: "Control order quantities for wholesale or B2B stores.",
    platform: "WooCommerce",
    featured: true,
  },
  {
    name: "WooCommerce Product Tabs Plus",
    summary: "Create, showcase, hide and manage custom product tabs.",
    platform: "WooCommerce",
    featured: false,
  },
  {
    name: "TutorLMS Course Import Export",
    summary: "Add, update, migrate and back up TutorLMS course content.",
    platform: "TutorLMS",
    featured: true,
  },
  {
    name: "TutorLMS Attendance",
    summary: "Track online course attendance and student behavior.",
    platform: "TutorLMS",
    featured: false,
  },
  {
    name: "LifterLMS Progress Reset",
    summary: "Let administrators reset a student's LifterLMS progress.",
    platform: "LifterLMS",
    featured: false,
  },
];
