import { useTranslation } from "react-i18next";
import { site } from "../../data/site";
import { getSocialLink } from "../../data/social";
import { useLanguage } from "../../hooks/useLanguage";
import type { SocialLinkId } from "../../types";
import { resolveHref } from "../../utils/resolveHref";
import Container from "../ui/Container";
import IconLink from "../ui/IconLink";
import { socialIcons } from "../ui/socialIcons";

const footerLinkIds: SocialLinkId[] = ["facebook", "whatsapp", "linkedin", "email", "phone"];

const Footer = () => {
  const { t } = useTranslation();
  const language = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container>
        <div className="flex flex-col items-center w-full">
          <div className="flex space-x-4">
            {footerLinkIds.map((id) => {
              const link = getSocialLink(id);
              const Icon = socialIcons[id];
              const href = resolveHref(link, language);
              return (
                <IconLink key={id} href={href} label={link.label[language]}>
                  <Icon size={24} />
                </IconLink>
              );
            })}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400">
            {t("footer.rights", { year: currentYear, name: site.name[language] })}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
