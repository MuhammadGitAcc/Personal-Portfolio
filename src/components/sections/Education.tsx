import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";
import Container from "../ui/Container";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's Degree in Software Engineering",
      institution: "Al-Baath University",
      location: "Syria",
      duration: "2017 - 2022",
      icon: <FaGraduationCap className="text-white text-2xl" />,
      position: "left",
    },
    {
      id: 2,
      degree: "Academic Master in Web Science (MWS)",
      institution: "Syrian Virtual University",
      location: "Syria",
      duration: "October 2023 – 2025",
      icon: <FaGraduationCap className="text-white text-2xl" />,
      position: "right",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Education</h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>

          {/* Timeline container */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line for desktop, left-aligned on mobile */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full z-0"></div>

            {educationData.map((item) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center mb-16 ${
                  item.position === "left" ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Content box */}
                <div
                  className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-5/12 text-center md:text-left ${
                    item.position === "right" ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-4">{item.degree}</h3>
                  <div className="flex flex-col md:flex-row md:items-center mb-2 text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                    <div className="flex items-center justify-center md:justify-start">
                      <FaUniversity className="mr-2 flex-shrink-0" />
                      <span>
                        {item.institution}, {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 justify-center md:justify-start">
                    <FaCalendarAlt className="mr-2 flex-shrink-0" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Timeline dot (adjusted only for mobile) */}
                <div className="absolute z-10 top-[-1.5rem] left-6 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md border-2 border-white dark:border-gray-800"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {item.icon}
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
