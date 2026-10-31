import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { site } from "../../data/site";
import { getSocialLink } from "../../data/social";
import { useLanguage } from "../../hooks/useLanguage";
import { resolveHref } from "../../utils/resolveHref";
import Button from "../ui/Button";
import Container from "../ui/Container";
import IconLink from "../ui/IconLink";
import { socialIcons } from "../ui/socialIcons";

const Hero = () => {
  const { t } = useTranslation();
  const language = useLanguage();
  const linkedin = getSocialLink("linkedin");
  const email = getSocialLink("email");
  const cv = getSocialLink("cv");
  const LinkedinIcon = socialIcons.linkedin;
  const EmailIcon = socialIcons.email;
  const CvIcon = socialIcons.cv;

  return (
    <section
      id="hero"
      className="py-20 md:py-32 flex flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <Container>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t("hero.greeting")} <span className="text-primary">{site.name[language]}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            {site.title[language]}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
            {site.description[language]}
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <IconLink
              href={resolveHref(linkedin, language)}
              label={linkedin.label[language]}
              variant="blue"
            >
              <LinkedinIcon size={24} />
            </IconLink>
            <IconLink
              href={resolveHref(email, language)}
              label={email.label[language]}
              variant="red"
            >
              <EmailIcon size={24} />
            </IconLink>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="#contact">{t("hero.contactMe")}</Button>
            <Button href="#projects" variant="secondary">
              {t("hero.viewProjects")}
            </Button>
            <Button href={resolveHref(cv, language)} variant="neutral">
              <CvIcon size={18} />
              {t("hero.viewCv")}
            </Button>
          </div>
        </Container>
      </motion.div>
    </section>
  );
};

export default Hero;
