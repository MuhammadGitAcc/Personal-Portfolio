import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../../data/navigation";
import { site } from "../../data/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useHideOnScroll } from "../../hooks/useHideOnScroll";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import LanguageToggle from "../ui/LanguageToggle";
import Logo from "../ui/Logo";
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
  const scrolledDown = useHideOnScroll();
  const isHidden = scrolledDown && !isMenuOpen;
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

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
          className={`hover:text-primary dark:hover:text-primary-light transition-colors ${isActive ? "text-primary dark:text-primary-light font-medium" : ""}`}
        >
          {t(item.labelKey)}
        </a>
      );
    });

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-[transform,background-color] duration-300 has-[:focus-visible]:translate-y-0 ${isHidden ? "-translate-y-[120%]" : "translate-y-0"}`}
    >
      <Container className="sm:px-12">
        <div className="flex justify-between items-center py-4">
          <nav aria-label={t("nav.label")} className="hidden md:flex items-center gap-8">
            {renderLinks()}
            <LanguageToggle />
            <ThemeToggle isDark={darkMode} onToggle={toggleDarkMode} />
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <button
              type="button"
              className="rounded-md p-1 text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <ThemeToggle isDark={darkMode} onToggle={toggleDarkMode} />
            <LanguageToggle />
          </div>

          <div className="flex items-center">
            <a href="#hero">
              <Logo
                label={t("common.logoAlt", { name: site.name[language] })}
                className="h-12 w-12"
              />
            </a>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute inset-x-0 top-full border-t border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg"
        >
          <Container className="sm:px-12">
            <nav aria-label={t("nav.label")} className="flex flex-col py-2 [&>a]:py-3">
              {renderLinks(closeMenu)}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
