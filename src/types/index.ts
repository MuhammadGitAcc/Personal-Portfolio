export type Language = "en" | "ar";

export type LocalizedText = Record<Language, string>;

export type SocialLinkId = "linkedin" | "email" | "phone" | "whatsapp" | "facebook" | "cv";

export interface SocialLink {
  id: SocialLinkId;
  label: LocalizedText;
  href: string | LocalizedText;
}

export interface NavItem {
  sectionId: string;
  labelKey: string;
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

export interface Project {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  imageAlt: LocalizedText;
  image: string;
  tags: string[];
  category: string;
  liveUrl: string;
  repoUrl?: string;
  featured?: boolean;
}
