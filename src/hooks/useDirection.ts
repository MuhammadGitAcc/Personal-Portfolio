import { useLayoutEffect } from "react";
import { useLanguage } from "./useLanguage";

export function useDirection(): void {
  const language = useLanguage();
  const direction = language === "ar" ? "rtl" : "ltr";

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);
}
