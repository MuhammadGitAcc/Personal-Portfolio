import { FaMoon, FaSun } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={isDark ? t("common.switchToLight") : t("common.switchToDark")}
    >
      {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
    </button>
  );
};

export default ThemeToggle;
