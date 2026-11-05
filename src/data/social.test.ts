import { describe, expect, it } from "vitest";
import { socialLinks } from "./social";

const safeLink = /^(https:\/\/|mailto:|tel:\+\d+$|\/)/;

const allHrefs = socialLinks.flatMap((link) =>
  typeof link.href === "string" ? [link.href] : Object.values(link.href),
);

describe("social links", () => {
  it("have unique ids", () => {
    const ids = socialLinks.map((link) => link.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("only use safe link schemes", () => {
    expect(allHrefs.filter((href) => !safeLink.test(href))).toEqual([]);
  });

  it("have a CV file for English and for Arabic", () => {
    const cv = socialLinks.find((link) => link.id === "cv");
    expect(cv).toBeDefined();
    expect(typeof cv?.href).toBe("object");
    expect(cv?.href).toEqual({
      en: expect.stringMatching(/\.pdf$/),
      ar: expect.stringMatching(/\.pdf$/),
    });
  });

  it("point to CV files that exist in public/cv", () => {
    const cv = socialLinks.find((link) => link.id === "cv");
    const href = cv?.href;
    const hrefs = typeof href === "object" ? Object.values(href) : [];
    const files = Object.keys(import.meta.glob("../../public/cv/*.pdf"));

    expect(hrefs.length).toBeGreaterThan(0);
    const missing = hrefs.filter((path) => !files.includes(`../../public${path}`));
    expect(missing).toEqual([]);
  });
});
