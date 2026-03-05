export interface Feature {
  icon: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Step {
  step: string;
  title: string;
  desc: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}
