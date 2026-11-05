import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

// Import all project images
import KareemIMS from "../../assets/KareemIMS.png";
import EmployeeTaskManagement from "../../assets/EmployeeTaskManagement.png";
const Projects = () => {
  const { t } = useTranslation();
  const language = useLanguage();
  const [filter, setFilter] = useState("all");

  const projectsData = [
    {
      id: 1,
      title: "Kareem | Inventory System",
      description: {
        en: "A full-stack, multi-branch platform for managing inventory, sales and repairs in retail shops. It covers serial and batch tracking, point-of-sale checkout, purchase orders, branch transfers, treasury, staff roles, offline support and three languages: English, Arabic and German.",
        ar: "منصة متكاملة متعددة الفروع لإدارة المخزون والمبيعات والصيانة في المتاجر. تشمل تتبّع الأرقام التسلسلية والدفعات، ونقطة البيع، وأوامر الشراء، والتحويل بين الفروع، والخزينة، وصلاحيات الموظفين، ودعم العمل دون اتصال، وتدعم العربية والإنجليزية والألمانية.",
      },
      link: "https://kareem-ims.pages.dev",
      category: "management",
      image: KareemIMS,
    },
    {
      id: 2,
      title: "Employee Task Management",
      description: {
        en: "A full-stack platform for managing team work: tasks with a drag-and-drop Kanban board, comments and activity history, dashboard charts, notifications and live team chat, with role-based access for admins, managers and employees.",
        ar: "منصة متكاملة لإدارة عمل الفريق: مهام مع لوحة كانبان بالسحب والإفلات، وتعليقات وسجل نشاط، ولوحة معلومات برسوم بيانية، وإشعارات، ومحادثة مباشرة للفريق، مع صلاحيات حسب الدور للمسؤول والمدير والموظف.",
      },
      link: "https://employee-task-management-system.pages.dev/",
      category: "management",
      image: EmployeeTaskManagement,
    },
  ];

  const filteredProjects =
    filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter);

  const categories = [
    { id: "all", name: t("projects.categories.all") },
    { id: "management", name: t("projects.categories.management") },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t("projects.title")} />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="h-80 bg-gray-200 dark:bg-gray-700 relative group">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"
                      >
                        <FaExternalLinkAlt size={24} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 truncate">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description[language]}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-primary-light font-medium flex items-center hover:underline"
                    >
                      View Project <FaExternalLinkAlt className="ms-2" size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
