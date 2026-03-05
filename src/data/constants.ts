import type { Feature, Testimonial, Stat, Step, FooterColumn } from "../types";

export const SITE_NAME = "WinWhen";

export const NAV_LINKS = ["Features", "Community", "Pricing", "About"];

export const FEATURES: Feature[] = [
  {
    icon: "👥",
    title: "People You May Know",
    desc: "Smart suggestions powered by shared interests, mutual connections, and your activity — find your tribe effortlessly.",
  },
  {
    icon: "💬",
    title: "1-on-1 & Group Chat",
    desc: "Real-time messaging with rich media support. Create groups, share moments, and stay connected with those who matter.",
  },
  {
    icon: "🛡️",
    title: "Verified Profiles",
    desc: "OTP-based verification ensures every member is real. Build trust before you build connections.",
  },
  {
    icon: "🔍",
    title: "Smart Filters",
    desc: "Advanced filtering to find exactly who you're looking for — by interest, location, availability, and more.",
  },
  {
    icon: "👤",
    title: "Rich Member Profiles",
    desc: "Showcase your personality with detailed profiles, events attended, and community badges.",
  },
  {
    icon: "📅",
    title: "Events & Meetups",
    desc: "Discover local events, RSVP with one tap, and meet like-minded people in real life.",
  },
];

export const STEPS: Step[] = [
  { step: "01", title: "Create & Verify", desc: "Sign up with OTP verification. Build your profile with interests and goals." },
  { step: "02", title: "Discover & Connect", desc: "Browse smart suggestions, filter by what matters, and send connection requests." },
  { step: "03", title: "Chat & Meet", desc: "Message 1-on-1 or in groups. Join events and build lasting relationships." },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "Community Organizer",
    text: "WinWhen completely changed how I discover and connect with people in my area. The events feature is a game-changer!",
    avatar: "SK",
  },
  {
    name: "Marcus T.",
    role: "Startup Founder",
    text: "I've found three co-founders and dozens of mentors through WinWhen. The smart matching is eerily accurate.",
    avatar: "MT",
  },
  {
    name: "Priya D.",
    role: "Freelance Designer",
    text: "Finally a social app that feels safe. Verified profiles mean I actually trust who I'm talking to.",
    avatar: "PD",
  },
];

export const STATS: Stat[] = [
  { value: "50K+", label: "Active Users" },
  { value: "12K+", label: "Connections Made" },
  { value: "3K+", label: "Events Hosted" },
  { value: "98%", label: "Satisfaction Rate" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: "Product", links: ["Features", "Pricing", "Download", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Licenses"] },
];
