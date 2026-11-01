import { describe, expect, it } from "vitest";

type Found = { path: string; value: Record<string, unknown> };

const modules = import.meta.glob(["./*.ts", "!./*.test.ts"], { eager: true }) as Record<
  string,
  Record<string, unknown>
>;

function collect(value: unknown, path: string, found: Found[]): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => collect(item, `${path}[${index}]`, found));
  } else if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if ("en" in record || "ar" in record) {
      found.push({ path, value: record });
    } else {
      Object.entries(record).forEach(([key, item]) => collect(item, `${path}.${key}`, found));
    }
  }
}

const found: Found[] = [];
for (const [file, exported] of Object.entries(modules)) {
  Object.entries(exported).forEach(([name, value]) => collect(value, `${file}:${name}`, found));
}

describe("data files", () => {
  it("contain localized texts to check", () => {
    expect(found.length).toBeGreaterThan(10);
  });

  it("have a non-empty English and Arabic text everywhere", () => {
    const incomplete = found
      .filter(({ value }) => {
        const { en, ar } = value;
        return (
          typeof en !== "string" || en.trim() === "" || typeof ar !== "string" || ar.trim() === ""
        );
      })
      .map(({ path }) => path);

    expect(incomplete).toEqual([]);
  });
});
