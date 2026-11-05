export type Language = "en" | "ar";

export type LocalizedText = Record<Language, string>;

export type SocialLinkId =
  "linkedin" | "github" | "email" | "phone" | "whatsapp" | "facebook" | "cv";

export interface SocialLink {
  id: SocialLinkId;
  label: LocalizedText;
  href: string | LocalizedText;
  display?: string;
}

export type NavLabelKey =
  "nav.about" | "nav.education" | "nav.experience" | "nav.projects" | "nav.contact";

export interface NavItem {
  sectionId: string;
  labelKey: NavLabelKey;
}

export interface Degree {
  id: string;
  degree: LocalizedText;
  institution: LocalizedText;
  location: LocalizedText;
  duration: LocalizedText;
}

export interface Job {
  id: string;
  role: LocalizedText;
  company: LocalizedText;
  location: LocalizedText;
  duration: LocalizedText;
  description: LocalizedText;
  skills: string[];
}

export type ProjectCategory = "management";

export interface Project {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  imageAlt: LocalizedText;
  image: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface SiteInfo {
  name: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  aboutHeadline: LocalizedText;
  aboutParagraphs: LocalizedText[];
  url: string;
  yearsOfExperience: number;
}
