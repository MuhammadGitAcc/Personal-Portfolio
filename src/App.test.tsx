import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import "./i18n";

const sectionIds = ["hero", "about", "education", "experience", "projects", "contact"];

describe("App", () => {
  it("renders the page landmarks and one main heading", async () => {
    render(<App />);

    expect(await screen.findByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders every section", async () => {
    render(<App />);
    await screen.findByRole("heading", { level: 1 });

    for (const id of sectionIds) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });

  it("shows no untranslated keys", async () => {
    render(<App />);
    await screen.findByRole("heading", { level: 1 });

    expect(document.body).not.toHaveTextContent(
      /\b(nav|hero|about|education|experience|footer|common|language)\.[a-zA-Z]+/,
    );
  });
});
