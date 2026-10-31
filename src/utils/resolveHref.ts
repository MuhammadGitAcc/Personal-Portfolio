import type { Language, SocialLink } from "../types";

export function resolveHref(link: SocialLink, language: Language): string {
  return typeof link.href === "string" ? link.href : link.href[language];
}
