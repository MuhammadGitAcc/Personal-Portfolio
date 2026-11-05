import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";
import type { ProjectCategory } from "../../types";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

type Filter = "all" | ProjectCategory;

const categoryIds = [...new Set(projects.map((project) => project.category))];

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { id: Filter; name: string }[] = [
    { id: "all", name: t("projects.categories.all") },
    ...categoryIds.map((id) => ({ id, name: t(`projects.categories.${id}`) })),
  ];

  const visibleProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 bg-gray-50 dark:bg-gray-900"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t("projects.title")} id="projects-heading" />

          <div
            role="group"
            aria-label={t("projects.filter")}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {filters.map(({ id, name }) => (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                aria-pressed={filter === id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === id
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
