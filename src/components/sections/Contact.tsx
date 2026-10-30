import { useState, useRef, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("REDACTED_EMAILJS_PUBLIC_KEY");
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill out all fields before sending.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    console.log("Sending email with data:", formData);

    // Use EmailJS to send the form - using the same approach as the working code
    emailjs
      .send(
        "REDACTED_SERVICE_ID",
        "REDACTED_TEMPLATE_ID",
        formData,
        "REDACTED_EMAILJS_PUBLIC_KEY",
      )
      .then((result) => {
        console.log("Email sent successfully:", result);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        setSubmitError(true);

        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Me</h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:removed-email@example.invalid"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors break-words"
                    >
                      removed-email@example.invalid
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+963000000000"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      +963 000 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Syria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100035195543126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://wa.me/+963000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-muhammad-217640173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {submitSuccess && (
                <div className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 p-4 rounded-md mb-6">
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </div>
              )}

              {submitError && (
                <div className="bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 p-4 rounded-md mb-6">
                  Error sending message. Please try again later.
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="Subject"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
