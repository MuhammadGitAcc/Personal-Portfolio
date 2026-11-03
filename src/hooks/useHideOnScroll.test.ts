import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useHideOnScroll } from "./useHideOnScroll";

function scrollTo(y: number) {
  Object.defineProperty(window, "scrollY", { value: y, configurable: true });
  act(() => {
    window.dispatchEvent(new Event("scroll"));
    vi.runAllTimers();
  });
}

describe("useHideOnScroll", () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ["requestAnimationFrame", "cancelAnimationFrame", "setTimeout"] });
    Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("hides when scrolling down and shows again when scrolling up", () => {
    const { result } = renderHook(() => useHideOnScroll());
    expect(result.current).toBe(false);

    scrollTo(300);
    expect(result.current).toBe(true);

    scrollTo(200);
    expect(result.current).toBe(false);
  });

  it("stays visible near the top of the page", () => {
    const { result } = renderHook(() => useHideOnScroll());

    scrollTo(300);
    expect(result.current).toBe(true);

    scrollTo(40);
    expect(result.current).toBe(false);
  });
});
