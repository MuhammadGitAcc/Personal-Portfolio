import type { AnchorHTMLAttributes } from "react";

export function getLinkProps(href: string): AnchorHTMLAttributes<HTMLAnchorElement> {
  const isExternal = /^https?:\/\//i.test(href);
  return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
