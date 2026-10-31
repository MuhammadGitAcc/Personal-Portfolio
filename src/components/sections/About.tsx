import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaCode, FaFlag, FaUser } from "react-icons/fa";
import { site } from "../../data/site";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const About = () => {
  const { t } = useTranslation();
  const language = useLanguage();

  const rows = [
    { icon: FaUser, label: t("about.name"), value: site.name[language] },
    { icon: FaFlag, label: t("about.nationality"), value: t("about.nationalityValue") },
    {
      icon: FaBriefcase,
      label: t("about.experience"),
      value: t("about.experienceValue", { years: site.yearsOfExperience }),
    },
    { icon: FaCode, label: t("about.specialization"), value: site.title[language] },
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t("about.title")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-10">
            <div className="order-2 md:order-1 flex justify-center">
              <dl className="flex flex-col gap-4 text-lg md:text-xl">
                {rows.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center">
                    <Icon className="text-primary mr-3 text-xl" aria-hidden="true" />
                    <div>
                      <dt className="inline font-bold">{label}:</dt>{" "}
                      <dd className="inline">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">{site.title[language]}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{site.description[language]}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
