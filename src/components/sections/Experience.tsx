import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../../data/experience";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import EarlierJob from "../ui/EarlierJob";
import MetaItem from "../ui/MetaItem";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";

const recentJobs = experience.slice(0, 2);
const earlierJobs = experience.slice(2);

const Experience = () => {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 bg-gray-100 dark:bg-gray-800"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t("experience.title")} id="experience-heading" />

          <div className="max-w-4xl mx-auto">
            {recentJobs.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 relative border-s-4 border-primary dark:border-primary-light text-center md:text-start">
                  <h3 className="text-xl font-bold mb-1">{item.role[language]}</h3>
                  <h4 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">
                    {item.company[language]}
                  </h4>

                  <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                    <MetaItem icon={FaCalendarAlt}>{item.duration[language]}</MetaItem>
                    <MetaItem icon={FaMapMarkerAlt}>{item.location[language]}</MetaItem>
                  </div>

                  <p className="mb-4 text-gray-600 dark:text-gray-300 text-center md:text-start">
                    {item.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {item.skills.map((skill) => (
                      <Tag key={skill}>{skill}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {earlierJobs.length > 0 && (
              <div className="mt-4">
                <h3 className="mb-4 text-lg font-semibold text-center md:text-start">
                  {t("experience.earlier")}
                </h3>
                <div className="space-y-3">
                  {earlierJobs.map((item) => (
                    <EarlierJob key={item.id} job={item} language={language} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Experience;
