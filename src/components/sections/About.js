import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-10">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="flex flex-col gap-4 text-lg md:text-xl">
                <div className="flex items-center">
                  <FaUser className="text-primary mr-3 text-xl" />
                  <span>
                    <strong>Name:</strong> Mohammad Mohammad
                  </span>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-primary mr-3 text-xl" />
                  <span>
                    <strong>Nationality:</strong> Syrian
                  </span>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-primary mr-3 text-xl" />
                  <span>
                    <strong>Experience:</strong> 3+ Years
                  </span>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-primary mr-3 text-xl" />
                  <span>
                    <strong>Specialization:</strong> Full-Stack Web Developer
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Software Engineer | Full-Stack Web Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Mohammad Mohammad – I build fast, scalable web applications
                using modern stacks like React, Next.js, and Node.js. With 2+
                years of experience developing e-commerce platforms, task
                management systems, and custom solutions, I focus on clean code,
                system architecture, and seamless integration across the full
                stack. Proficient in TypeScript, REST APIs, and cloud platforms,
                I am also pursuing a Master’s in Web Science to deepen expertise
                in performance and emerging technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
