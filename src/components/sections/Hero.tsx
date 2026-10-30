import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="py-20 md:py-32 flex flex-col items-center justify-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Mohammad Mohammad</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
          Software Engineer | Full-Stack Web Developer
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          With over 3 years of experience in web development and design, I build
          modern, responsive applications that prioritize user experience and
          are powered by clean, efficient code. I work across the full stack
          using React, TypeScript, Tailwind CSS on the front-end and Node.js,
          Python, PostgreSQL on the back-end.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://www.linkedin.com/in/muhammad-muhammad-217640173"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:removed-email@example.invalid"
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://drive.google.com/file/d/1zMhhjfzZmG1RpxIFoH_eLJG2-VV7RcHb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
            aria-label="View CV"
          >
            <FaFileAlt size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1zMhhjfzZmG1RpxIFoH_eLJG2-VV7RcHb/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <FaFileAlt size={18} />
            View CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
