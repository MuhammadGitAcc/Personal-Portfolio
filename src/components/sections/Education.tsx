import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCalendarAlt, FaGraduationCap, FaUniversity } from "react-icons/fa";
import { education } from "../../data/education";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import MetaItem from "../ui/MetaItem";
import SectionHeading from "../ui/SectionHeading";

const Education = () => {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t("education.title")} id="education-heading" />

          {/* Timeline container */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line for desktop, left-aligned on mobile */}
            <div className="absolute start-6 md:start-1/2 md:ltr:-translate-x-1/2 md:rtl:translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full z-0"></div>

            {education.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Content box */}
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-5/12 text-center md:text-start ${
                    index % 2 !== 0 ? "md:ms-auto" : "md:me-auto"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-4">{item.degree[language]}</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <MetaItem icon={FaUniversity}>
                      {item.institution[language]}, {item.location[language]}
                    </MetaItem>
                    <MetaItem icon={FaCalendarAlt}>{item.duration[language]}</MetaItem>
                  </div>
                </div>

                {/* Timeline dot (adjusted only for mobile) */}
                <div className="absolute z-10 top-[-1.5rem] start-6 md:start-1/2 md:ltr:-translate-x-1/2 md:rtl:translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md border-2 border-white dark:border-gray-800"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <FaGraduationCap className="text-white text-2xl" aria-hidden="true" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Education;
