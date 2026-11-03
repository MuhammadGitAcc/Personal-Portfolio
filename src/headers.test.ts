import { describe, expect, it } from "vitest";
import headers from "../public/_headers?raw";
import indexHtml from "../index.html?raw";

function inlineScripts(html: string): string[] {
  return [...html.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(
    (match) => match[1] ?? "",
  );
}

async function sha256Base64(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return btoa(String.fromCharCode(...new Uint8Array(digest)));
}

describe("security headers", () => {
  it("allows every inline script of index.html by hash", async () => {
    const scripts = inlineScripts(indexHtml);
    expect(scripts.length).toBeGreaterThan(0);

    for (const script of scripts) {
      const hash = await sha256Base64(script);
      expect(headers).toContain(`'sha256-${hash}'`);
    }
  });

  it("does not allow unsafe inline or eval scripts", () => {
    const policy = headers.split("\n").find((line) => line.includes("Content-Security-Policy"));
    const scriptSrc = /script-src([^;]*);/.exec(policy ?? "")?.[1] ?? "";
    expect(scriptSrc).not.toContain("unsafe-inline");
    expect(scriptSrc).not.toContain("unsafe-eval");
  });
});
