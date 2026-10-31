import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialDark(): boolean {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {
    // Storage is not available (for example private mode): use the system setting.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function saveTheme(isDark: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  } catch {
    // Storage is not available: the choice only lasts for this visit.
  }
}

export function useTheme() {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    saveTheme(next);
  };

  return { isDark, toggleTheme };
}
