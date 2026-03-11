import type { Feature, Testimonial, Stat, Step, FooterColumn } from "../types";

export const SITE_NAME = "WinWhen";

export const NAV_LINKS = ["Features", "Community", "About"];

export const FEATURES: Feature[] = [
  {
    icon: "📅",
    title: "Share Your Schedule",
    desc: "Post upcoming events like sports games, band concerts, recitals, graduations, and more for everyone who matters to see.",
  },
  {
    icon: "🔔",
    title: "Stay in the Loop",
    desc: "Follow family and friends to see all their upcoming events in one organized, easy-to-read place.",
  },
  {
    icon: "🙌",
    title: "Show Your Support",
    desc: "Mark whether you're going so everyone knows who will be there cheering. Because showing up matters.",
  },
  {
    icon: "📸",
    title: "Capture the Moment",
    desc: "After the event, add scores, highlights, and comments to celebrate the outcome and preserve the memory.",
  },
  {
    icon: "⏰",
    title: "Never Miss an Event",
    desc: "Get timely reminders before events start so you're always there for the moments that matter most.",
  },
];

export const STEPS: Step[] = [
  { step: "01", title: "Share Your Events", desc: "Post your upcoming games, concerts, recitals, and milestones so family and friends always know what's coming." },
  { step: "02", title: "Follow & Support", desc: "Follow the people you care about, see their upcoming events, and mark if you'll be there to cheer them on." },
  { step: "03", title: "Celebrate Together", desc: "After the event, add scores, highlights, and comments to celebrate every achievement and capture the memory." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Soccer Mom",
    text: "WinWhen keeps our whole extended family in sync. Grandma never misses a game anymore — she always knows exactly when to show up and cheer!",
    avatar: "SM",
  },
  {
    name: "James T.",
    role: "Youth Soccer Coach",
    text: "I post our game schedule once and every parent sees it, RSVPs, and gets reminders. It's completely changed how we organize our team's events.",
    avatar: "JT",
  },
  {
    name: "Priya L.",
    role: "Concert Performer",
    text: "My family lives across the country but WinWhen keeps them connected to every recital and concert. They never miss a single performance!",
    avatar: "PL",
  },
];

export const STATS: Stat[] = [
  { value: "50K+", label: "Families Connected" },
  { value: "200K+", label: "Events Shared" },
  { value: "1M+", label: "Moments Captured" },
  { value: "98%", label: "Would Recommend" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: "Product", links: ["Features", "Pricing", "Download", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Licenses"] },
];
