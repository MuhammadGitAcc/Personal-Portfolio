import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Full-Stack Web Developer",
      company: "Codex",
      duration: "Sep 2025 - Dec 2025",
      location: "Remote",
      description:
        "Developing end-to-end web applications using modern full-stack technologies. Building responsive front-end interfaces with React.js and Next.js, while implementing scalable back-end solutions with Node.js and Express. Designing RESTful APIs, integrating databases, and deploying applications on cloud platforms to deliver performant, maintainable systems across the entire stack.",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "REST APIs",
        "Git",
        "AWS",
        "Docker",
      ],
    },
    {
      id: 2,
      role: "React Developer",
      company: "TechLine Group",
      duration: "Jan 2025 - May 2025",
      location: "Remote",
      description:
        "Currently, I develop dynamic and responsive web applications using React.js, collaborating with cross-functional teams to deliver high-performance frontend solutions. My role involves optimizing user interfaces, integrating RESTful APIs, and ensuring seamless user experiences while adhering to modern development practices like component-based architecture, state management, and reusable code.",
      skills: [
        "React.js",
        "TypeScript",
        "Tailwind",
        "ECMAScript",
        "Git",
        "Rest APIs",
      ],
    },
    {
      id: 3,
      role: "React.JS Developer",
      company: "Future Learning",
      duration: "Jul 2024 - Dec 2024",
      location: "Remote",
      description:
        "At Future Learning, I build dynamic and responsive web applications using React.js, contributing to an innovative platform that transforms digital education. My role involves developing interactive user interfaces, optimizing performance, and collaborating with cross-functional teams to deliver seamless learning experiences. Leveraging modern frontend technologies, I help create scalable solutions that enhance user engagement and accessibility.",
      skills: [
        "React.js",
        "TypeScript",
        "Bootstrap (Framework)",
        "Tailwind",
        "Rest APIs",
      ],
    },
    {
      id: 4,
      role: "FrontEnd Web Developer",
      company: "SoftTech",
      duration: "Dec 2023 - May 2024",
      location: "Remote",
      description:
        "At Softtech, I develop modern, responsive web applications using React.js, focusing on performance, accessibility, and seamless user experiences. Collaborating with cross-functional teams, I transform design mockups into functional interfaces while ensuring clean, maintainable code. My role also involves optimizing frontend architecture and integrating APIs to deliver scalable solutions that align with business goals. Passionate about innovation, I stay updated with the latest frontend trends to implement cutting-edge features in our projects.",
      skills: [
        "React.js",
        "TypeScript",
        "Node.Js",
        "Vite",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
    },
    {
      id: 5,
      role: "User Experience Designer",
      company: "Syrian Tech Solutions",
      duration: "Jul 2023 - Sep 2023",
      location: "Remote",
      description:
        "At Syrian Tech Solutions, I worked as a UX Designer, where I focused on creating intuitive and user-friendly digital experiences. I collaborated with developers and product teams to design wireframes, prototypes, and high-fidelity interfaces using Figma, ensuring seamless interactions and visually appealing layouts. My role involved conducting user research, refining designs based on feedback, and aligning interfaces with both business goals and user needs—helping to enhance usability and engagement across web and mobile platforms.",
      skills: [
        "UI/UX design",
        "Figma (Software)",
        "Cascading Style Sheets (CSS)",
      ],
    },
    {
      id: 6,
      role: "WordPress Developer",
      company: "NTT Data Business Solutions",
      duration: "Oct 2022 - Apr 2023",
      location: "Remote",
      description:
        "I develop high-performance WordPress solutions at NTT Data, creating custom themes, plugins, and Woo Commerce integrations. My focus is on building secure, scalable websites with clean code and optimal user experience. I collaborate with teams to deliver business-aligned digital solutions using PHP, JavaScript, and modern development practices.",
      skills: ["Wordpress Development", "JavaScript", "UI-UX Design"],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 relative border-l-4 border-primary text-center md:text-left">
                  <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {item.company}
                  </h4>

                  <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                    <div className="flex items-center justify-center md:justify-start">
                      <FaCalendarAlt className="mr-2" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600 dark:text-gray-300 text-center md:text-left">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
