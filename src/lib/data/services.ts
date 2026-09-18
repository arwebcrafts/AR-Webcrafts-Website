export type ServiceCard = {
  title: string;
  description: string;
  href: string;
};

export const homepageServices: ServiceCard[] = [
  {
    title: "WordPress plugins & WooCommerce extensions",
    description:
      "Custom checkout flows, B2B pricing, LMS logic, ERP/CRM integrations — the features standard plugins can't handle.",
    href: "/services/wordpress-plugins",
  },
  {
    title: "SaaS & web apps",
    description:
      "React, Next.js, Node and Laravel builds for founders shipping a product, not just a website.",
    href: "/services/saas-development",
  },
  {
    title: "Business websites",
    description:
      "Fast, custom WordPress or Next.js sites for local and growing businesses — no templates.",
    href: "/services/websites",
  },
  {
    title: "Dedicated developers",
    description:
      "A senior developer on your team, monthly — direct access, no project-manager layer.",
    href: "/services/dedicated-developers",
  },
];

export const howWeWorkSteps = [
  {
    title: "Free call",
    description: "30 minutes, direct with the developers who'd build your project.",
  },
  {
    title: "Clear scope, fixed quote",
    description: "A written proposal with scope, timeline and fixed pricing — no surprise costs mid-project.",
  },
  {
    title: "Build with staging previews",
    description: "Every commit pushed to staging, so you see real progress, not a demo after six weeks.",
  },
  {
    title: "Launch and ongoing support",
    description: "Production deployment, training, documentation, and 30-day post-launch support included.",
  },
];

export const whyUsPoints = [
  {
    title: "In-house seniors only",
    description: "Senior developers only — no juniors, no outsourcing to freelancers.",
  },
  {
    title: "Direct contact with developers",
    description: "You talk to the person building your project — no project-manager middleman.",
  },
  {
    title: "US-registered company",
    description: "AR WebCrafts LLC, Wyoming — with US-hours availability.",
  },
  {
    title: "Honest about what you need",
    description: "If a $99 plugin solves your problem, we'll tell you instead of selling you a custom build.",
  },
];

export const generalFaqs = [
  {
    question: "How do you price a project?",
    answer:
      "Fixed price after a free discovery call, based on a written scope. No hourly surprises — if the quote says a feature is included, it's included.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Depends on scope — a custom plugin or a business website usually runs 6–12 weeks. You get a specific timeline in the proposal, not a range.",
  },
  {
    question: "Who owns the code when we're done?",
    answer: "You do. Full ownership of everything we build, documented so another developer could pick it up.",
  },
  {
    question: "What happens after launch?",
    answer:
      "30 days of post-launch support is included. Most clients continue on a monthly retainer for features, fixes and updates — about 60% of our clients stick around.",
  },
  {
    question: "How do we communicate during the build?",
    answer: "A direct Slack channel and a weekly progress call with the developers, not a project manager relaying messages.",
  },
];
