import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";
import i18n from "./i18n";

async function renderApp() {
  render(<App />);
  await screen.findByRole("heading", { level: 1 });
}

beforeEach(async () => {
  localStorage.clear();
  document.documentElement.className = "";
  await i18n.changeLanguage("en");
});

describe("App behaviour", () => {
  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    await renderApp();

    const openButton = screen.getByRole("button", { name: "Open menu" });
    expect(openButton).toHaveAttribute("aria-expanded", "false");
    expect(document.getElementById("mobile-menu")).not.toBeInTheDocument();

    await user.click(openButton);
    const closeButton = screen.getByRole("button", { name: "Close menu" });
    expect(closeButton).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("mobile-menu")).toBeInTheDocument();

    await user.click(closeButton);
    expect(document.getElementById("mobile-menu")).not.toBeInTheDocument();
  });

  it("closes the mobile menu after choosing a link", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const menu = document.getElementById("mobile-menu");
    expect(menu).toBeInTheDocument();

    await user.click(within(menu as HTMLElement).getByRole("link", { name: "About" }));
    expect(document.getElementById("mobile-menu")).not.toBeInTheDocument();
  });

  it("switches the theme and remembers it", async () => {
    const user = userEvent.setup();
    await renderApp();
    expect(document.documentElement).not.toHaveClass("dark");

    await user.click(screen.getAllByRole("button", { name: "Switch to dark mode" })[0]);
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("dark");

    await user.click(screen.getAllByRole("button", { name: "Switch to light mode" })[0]);
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("switches the language and the page direction", async () => {
    const user = userEvent.setup();
    await renderApp();
    expect(document.documentElement).toHaveAttribute("dir", "ltr");
    expect(document.documentElement).toHaveAttribute("lang", "en");

    await user.click(screen.getAllByRole("button", { name: "العربية" })[0]);
    await waitFor(() => expect(document.documentElement).toHaveAttribute("dir", "rtl"));
    expect(document.documentElement).toHaveAttribute("lang", "ar");
    expect(await screen.findByRole("link", { name: "نبذة عني" })).toBeInTheDocument();
    expect(localStorage.getItem("language")).toBe("ar");

    await user.click(screen.getAllByRole("button", { name: "English" })[0]);
    await waitFor(() => expect(document.documentElement).toHaveAttribute("dir", "ltr"));
    expect(document.documentElement).toHaveAttribute("lang", "en");
  });

  it("puts the skip link first in the tab order", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.tab();
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveFocus();
  });
});
