import { describe, expect, it } from "vitest";
import en from "../i18n/locales/en.json";
import { projects } from "./projects";

describe("projects data", () => {
  it("has at least one project and unique slugs", () => {
    expect(projects.length).toBeGreaterThan(0);
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every project an image, alt text and tags", () => {
    for (const project of projects) {
      expect(project.image, project.slug).toBeTruthy();
      expect(project.imageAlt.en.trim(), project.slug).not.toBe("");
      expect(project.imageAlt.ar.trim(), project.slug).not.toBe("");
      expect(project.tags.length, project.slug).toBeGreaterThan(0);
    }
  });

  it("uses https links only", () => {
    for (const project of projects) {
      expect(project.liveUrl, project.slug).toMatch(/^https:\/\//);
      if (project.repoUrl) {
        expect(project.repoUrl, project.slug).toMatch(/^https:\/\//);
      }
    }
  });

  it("has a translated name for every category", () => {
    for (const project of projects) {
      expect(en.projects.categories, project.slug).toHaveProperty(project.category);
    }
  });
});
