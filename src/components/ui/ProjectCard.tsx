import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import { getLinkProps } from "../../utils/linkProps";
import type { Project } from "../../types";
import Tag from "./Tag";

type ProjectCardProps = {
  project: Project;
};

const linkClasses =
  "inline-flex items-center font-medium text-primary hover:underline dark:text-primary-light";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const language = useLanguage();
  const title = project.title[language];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
    >
      <img
        src={project.image}
        alt={project.imageAlt[language]}
        width={1280}
        height={800}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full bg-gray-200 object-cover object-top dark:bg-gray-700"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description[language]}</p>
        <ul className="mb-6 flex flex-wrap gap-2" aria-label={t("projects.technologies")}>
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={project.liveUrl} {...getLinkProps(project.liveUrl)} className={linkClasses}>
            {t("projects.viewProject")}
            <span className="sr-only">: {title}</span>
            <FaExternalLinkAlt className="ms-2" size={14} aria-hidden="true" />
          </a>
          {project.repoUrl && (
            <a href={project.repoUrl} {...getLinkProps(project.repoUrl)} className={linkClasses}>
              <FaGithub className="me-2" size={16} aria-hidden="true" />
              {t("projects.viewSource")}
              <span className="sr-only">: {title}</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
