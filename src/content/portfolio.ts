import rawContent from "./portfolio-content.json";

export type Locale = "en" | "id";

type SocialIcon = "github" | "linkedin" | "instagram";

export type SocialLink = {
  label: string;
  icon: SocialIcon;
  href: string;
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  focus: string;
  summary: string;
  aboutDetail: string;
  phoneHref: string;
  resumeUrl: string;
  resumeIdUrl: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  details: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type Project = {
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  repoUrl: string;
  details: string[];
};

export type ResumeEntry = {
  period: string;
  title: string;
  place: string;
  location: string;
  description: string;
  details: string[];
  gpa?: string;
};

export type Certification = {
  title: string;
  issuer: string;
};

export type PortfolioLocaleContent = {
  profile: Omit<Profile, "phoneHref" | "resumeUrl" | "resumeIdUrl">;
  experience: ExperienceItem[];
  skills: SkillGroup[];
  projects: Project[];
  education: ResumeEntry[];
  certifications: Certification[];
};

export type PortfolioContent = {
  shared: { socialLinks: SocialLink[] };
  en: PortfolioLocaleContent;
  id: PortfolioLocaleContent;
};

export const portfolioContent = rawContent as PortfolioContent;
export const socialLinks = portfolioContent.shared.socialLinks;
export const navigation = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "user" },
  { label: "Experience", href: "#experience", icon: "briefcase" },
  { label: "Skills", href: "#skills", icon: "code" },
  { label: "Projects", href: "#projects", icon: "layers" },
  { label: "Education", href: "#education", icon: "graduation" },
  { label: "Contact", href: "#contact", icon: "mail" },
] as const;

const websiteContent = portfolioContent.en;

export const profile: Profile = {
  ...websiteContent.profile,
  phoneHref: "tel:+6282134501114",
  resumeUrl: "/cv/daffa-ayyasy-cv-en.pdf",
  resumeIdUrl: "/cv/daffa-ayyasy-cv-id.pdf",
};

export const experience = websiteContent.experience;
export const skillGroups = websiteContent.skills;
export const projects = websiteContent.projects;
export const education = websiteContent.education;
export const certifications = websiteContent.certifications;
