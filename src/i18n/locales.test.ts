import { describe, expect, it } from "vitest";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

function flatten(source: Record<string, unknown>, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(source)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      result[path] = value;
    } else if (value && typeof value === "object") {
      Object.assign(result, flatten(value as Record<string, unknown>, path));
    }
  }
  return result;
}

function placeholders(text: string): string[] {
  return (text.match(/{{\s*\w+\s*}}/g) ?? []).map((item) => item.replace(/\s/g, "")).sort();
}

const english = flatten(en);
const arabic = flatten(ar);

describe("locale files", () => {
  it("have the same keys in English and Arabic", () => {
    expect(Object.keys(arabic).sort()).toEqual(Object.keys(english).sort());
  });

  it("have no empty translations", () => {
    const empty = [
      ...Object.entries(english).filter(([, text]) => text.trim() === ""),
      ...Object.entries(arabic).filter(([, text]) => text.trim() === ""),
    ].map(([key]) => key);

    expect(empty).toEqual([]);
  });

  it("use the same placeholders in both languages", () => {
    const mismatched = Object.keys(english).filter(
      (key) =>
        key in arabic && placeholders(english[key]).join() !== placeholders(arabic[key]).join(),
    );

    expect(mismatched).toEqual([]);
  });
});
