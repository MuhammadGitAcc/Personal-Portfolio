import type { AnchorHTMLAttributes } from "react";

export function getLinkProps(href: string): AnchorHTMLAttributes<HTMLAnchorElement> {
  const opensInNewTab = /^https?:\/\//i.test(href) || /\.pdf$/i.test(href);
  return opensInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
