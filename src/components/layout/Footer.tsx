import { useTranslation } from "react-i18next";
import { site } from "../../data/site";
import { getSocialLink } from "../../data/social";
import { useLanguage } from "../../hooks/useLanguage";
import type { SocialLinkId } from "../../types";
import { resolveHref } from "../../utils/resolveHref";
import Container from "../ui/Container";
import IconLink from "../ui/IconLink";
import { socialIcons } from "../ui/socialIcons";

const footerLinkIds: SocialLinkId[] = ["whatsapp", "linkedin", "github", "email", "phone"];

const Footer = () => {
  const { t } = useTranslation();
  const language = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <Container className="sm:px-12">
        <div className="flex flex-wrap justify-center gap-3 py-10">
          {footerLinkIds.map((id) => {
            const link = getSocialLink(id);
            const Icon = socialIcons[id];
            const href = resolveHref(link, language);
            return (
              <IconLink key={id} href={href} label={link.label[language]}>
                <Icon size={20} />
              </IconLink>
            );
          })}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t("footer.rights", { year: currentYear, name: site.name[language] })}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
