import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import type { Language } from "../../types";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const language = useLanguage();
  const target: Language = language === "ar" ? "en" : "ar";

  return (
    <button
      type="button"
      onClick={() => void i18n.changeLanguage(target)}
      className="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <span lang={target}>{t(`language.${target}`)}</span>
    </button>
  );
};

export default LanguageToggle;
