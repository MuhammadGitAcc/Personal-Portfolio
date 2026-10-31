import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { navItems } from "../../data/navigation";
import { site } from "../../data/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import LanguageToggle from "../ui/LanguageToggle";
import ThemeToggle from "../ui/ThemeToggle";

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const sectionIds = ["hero", ...navItems.map((item) => item.sectionId)];

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const language = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const renderLinks = (onNavigate?: () => void) =>
    navItems.map((item) => {
      const isActive = activeSection === item.sectionId;
      return (
        <a
          key={item.sectionId}
          href={`#${item.sectionId}`}
          onClick={onNavigate}
          aria-current={isActive ? "true" : undefined}
          className={`hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : ""}`}
        >
          {t(item.labelKey)}
        </a>
      );
    });

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <Container className="sm:px-12">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#hero">
              <img
                src={Logo}
                alt={t("common.logoAlt", { name: site.name[language] })}
                className="h-14 w-auto"
              />
            </a>
          </div>

          <nav aria-label={t("nav.label")} className="hidden md:flex items-center space-x-8">
            {renderLinks()}
            <LanguageToggle />
            <ThemeToggle isDark={darkMode} onToggle={toggleDarkMode} />
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle isDark={darkMode} onToggle={toggleDarkMode} />
            <button
              type="button"
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 pb-6">
            <nav aria-label={t("nav.label")} className="flex flex-col space-y-4">
              {renderLinks(closeMenu)}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
