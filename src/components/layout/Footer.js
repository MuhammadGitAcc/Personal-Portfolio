import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center w-full">
          {/* <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Mohammad Mohammad</h3>
            <p className="text-gray-300 mt-1">Software Engineer | Full-Stack Web Developer</p>
          </div> */}

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100035195543126"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://wa.me/+963000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-muhammad-217640173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:removed-email@example.invalid"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="tel:+963000000000"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaPhone size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400">
            © {currentYear} Mohammad Mohammad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
