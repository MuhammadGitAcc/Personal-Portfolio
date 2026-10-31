import { useTranslation } from "react-i18next";
import type { Language } from "../types";

export function useLanguage(): Language {
  const { i18n } = useTranslation();
  return i18n.resolvedLanguage === "ar" ? "ar" : "en";
}
