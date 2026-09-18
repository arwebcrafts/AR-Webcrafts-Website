// Sourced verbatim from https://www.arwebcrafts.com (homepage + /portfolio/).
// Do not invent new quotes — add real ones here only.

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  audience: "general" | "agency";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our course completion rate jumped from 52% to 71% after AR Webcrafts built our custom student tracking system. LearnDash couldn't handle our certification logic—they built exactly what we needed in 10 weeks.",
    name: "Sarah M.",
    role: "Founder, Online Education Platform",
    audience: "general",
  },
  {
    quote:
      "The ERP integration AR Webcrafts built eliminated 40+ hours per week of manual data entry. ROI in 6 months. Our operations team can finally focus on growth instead of spreadsheets.",
    name: "Michael R.",
    role: "Director of Operations, Manufacturing Company",
    audience: "general",
  },
  {
    quote:
      "I needed a custom WooCommerce checkout with subscription logic. They delivered in 8 weeks exactly as quoted. Great results, paid for itself in Q1. AR WebCrafts is now our go-to for updates.",
    name: "David Li",
    role: "Director, D2C Supplement Brand",
    audience: "general",
  },
  {
    quote:
      "I wasn't sure how to even start building my site, but AR Webcrafts took over and built a fantastic WordPress site for me. They listened to my ideas and implemented them. Now I finally feel confident presenting my company online.",
    name: "Rana Ali",
    role: "Owner, UK Phone House",
    audience: "general",
  },
  {
    quote:
      "I've been working with Arman for the last year and I must say he's an amazing hard working guy. Very friendly and professional. If you need any development work then he's your guy.",
    name: "Georgios Cappon",
    role: "Owner & Creative Director, Pixoyo",
    audience: "general",
  },
  {
    quote:
      "We needed a fully custom WordPress theme built for a solar energy client — something that didn't exist off the shelf and had to match a very specific design. AR WebCrafts handled the entire build. The theme came out exactly as we needed, and working with them across the time zone was never a problem. We'll be sending more projects their way.",
    name: "Suzan",
    role: "Agency Owner, Germany",
    audience: "agency",
  },
  {
    quote:
      "I needed a brokerage website that reflected how I actually work — not a generic template. AR WebCrafts built it from the ground up and understood what a mortgage broker's clients need to see before they pick up the phone.",
    name: "Paul",
    role: "Mortgage Broker, Owner",
    audience: "general",
  },
  {
    quote:
      "I run a web design agency and I outsource all the development and customization work to AR WebCrafts. When you're running client projects, you need a dev team you can hand something to and trust it'll come back right. That's what they are for me. Fast turnaround, no back-and-forth on basic stuff, and they flag problems before they become your problem.",
    name: "Justin",
    role: "Owner, Web Wizard Agency (webwizardagency.com)",
    audience: "agency",
  },
];
