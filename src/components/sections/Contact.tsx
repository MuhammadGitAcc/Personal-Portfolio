import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getSocialLink } from "../../data/social";
import { useLanguage } from "../../hooks/useLanguage";
import { sendContactMessage } from "../../services/emailService";
import type { ContactMessage } from "../../services/emailService";
import type { SocialLinkId } from "../../types";
import { resolveHref } from "../../utils/resolveHref";
import Container from "../ui/Container";
import IconLink from "../ui/IconLink";
import SectionHeading from "../ui/SectionHeading";
import { socialIcons } from "../ui/socialIcons";

type Field = keyof ContactMessage;
type Feedback = "success" | "error" | "cooldown";
type TextField = { id: "name" | "email" | "subject"; type: string; autoComplete: string };

const COOLDOWN_MS = 30_000;
const FEEDBACK_MS = 6_000;
const emptyForm: ContactMessage = { name: "", email: "", subject: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const textFields: TextField[] = [
  { id: "name", type: "text", autoComplete: "name" },
  { id: "email", type: "email", autoComplete: "email" },
  { id: "subject", type: "text", autoComplete: "off" },
];

const connectLinks: { id: SocialLinkId; variant: "blue" | "green" | "gray" }[] = [
  { id: "facebook", variant: "blue" },
  { id: "whatsapp", variant: "green" },
  { id: "linkedin", variant: "blue" },
  { id: "github", variant: "gray" },
];

const feedbackStyles: Record<Feedback, string> = {
  success: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100",
  error: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100",
  cooldown: "bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100",
};

const inputBase =
  "w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-light";

function fieldClass(hasError: boolean): string {
  const border = hasError
    ? "border-red-600 dark:border-red-400"
    : "border-gray-300 dark:border-gray-600";
  return `${inputBase} ${border}`;
}

function validate(values: ContactMessage): Field[] {
  const invalid: Field[] = [];
  if (values.name.trim() === "") invalid.push("name");
  if (!emailPattern.test(values.email.trim())) invalid.push("email");
  if (values.subject.trim() === "") invalid.push("subject");
  if (values.message.trim() === "") invalid.push("message");
  return invalid;
}

const Contact = () => {
  const { t } = useTranslation();
  const language = useLanguage();
  const [values, setValues] = useState<ContactMessage>(emptyForm);
  const [invalid, setInvalid] = useState<Field[]>([]);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const lastSentAt = useRef(0);
  const feedbackTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(feedbackTimer.current);
  }, []);

  const showFeedback = (next: Feedback) => {
    window.clearTimeout(feedbackTimer.current);
    setFeedback(next);
    feedbackTimer.current = window.setTimeout(() => setFeedback(null), FEEDBACK_MS);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name as Field;
    const { value } = event.target;
    setValues((previous) => ({ ...previous, [field]: value }));
    setInvalid((previous) => previous.filter((item) => item !== field));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) {
      return;
    }

    const problems = validate(values);
    setInvalid(problems);
    if (problems.length > 0) {
      document.getElementById(`contact-${problems[0]}`)?.focus();
      return;
    }

    if (honeypotRef.current?.value) {
      setValues(emptyForm);
      showFeedback("success");
      return;
    }

    if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
      showFeedback("cooldown");
      return;
    }

    setSending(true);
    try {
      await sendContactMessage({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      });
      lastSentAt.current = Date.now();
      setValues(emptyForm);
      showFeedback("success");
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error(error);
      }
      showFeedback("error");
    } finally {
      setSending(false);
    }
  };

  const infoRows = [
    { link: getSocialLink("email"), label: t("contact.email") },
    { link: getSocialLink("phone"), label: t("contact.phone") },
  ];
  const messageInvalid = invalid.includes("message");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 bg-gray-100 dark:bg-gray-800"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeading title={t("contact.title")} id="contact-heading" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">{t("contact.getInTouch")}</h3>

              <div className="space-y-6">
                {infoRows.map(({ link, label }) => {
                  const Icon = socialIcons[link.id];
                  return (
                    <div key={link.id} className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full me-4 flex-shrink-0">
                        <Icon
                          className="text-primary dark:text-primary-light text-xl"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold mb-1">{label}</h4>
                        <a
                          href={resolveHref(link, language)}
                          dir="ltr"
                          className="inline-block max-w-full text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors [overflow-wrap:anywhere]"
                        >
                          {link.display}
                        </a>
                      </div>
                    </div>
                  );
                })}

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full me-4 flex-shrink-0">
                    <FaMapMarkerAlt
                      className="text-primary dark:text-primary-light text-xl"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold mb-1">{t("contact.location")}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{t("contact.locationValue")}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">{t("contact.connect")}</h4>
                <div className="flex flex-wrap gap-4">
                  {connectLinks.map(({ id, variant }) => {
                    const link = getSocialLink(id);
                    const Icon = socialIcons[id];
                    return (
                      <IconLink
                        key={id}
                        href={resolveHref(link, language)}
                        label={link.label[language]}
                        variant={variant}
                      >
                        <Icon size={20} />
                      </IconLink>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">{t("contact.sendTitle")}</h3>

              <div role="status" aria-live="polite">
                {feedback && (
                  <p className={`p-4 rounded-md mb-6 ${feedbackStyles[feedback]}`}>
                    {t(`contact.form.${feedback}`)}
                  </p>
                )}
              </div>

              <form onSubmit={(event) => void handleSubmit(event)} noValidate>
                {textFields.map(({ id, type, autoComplete }) => {
                  const hasError = invalid.includes(id);
                  return (
                    <div key={id} className="mb-4">
                      <label
                        htmlFor={`contact-${id}`}
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {t(`contact.form.${id}`)}
                      </label>
                      <input
                        type={type}
                        id={`contact-${id}`}
                        name={id}
                        value={values[id]}
                        onChange={handleChange}
                        autoComplete={autoComplete}
                        aria-required="true"
                        aria-invalid={hasError}
                        aria-describedby={hasError ? `contact-${id}-error` : undefined}
                        className={fieldClass(hasError)}
                        placeholder={t(`contact.form.${id}Placeholder`)}
                      />
                      {hasError && (
                        <p
                          id={`contact-${id}-error`}
                          className="mt-1 text-sm text-red-700 dark:text-red-300"
                        >
                          {t(`contact.form.errors.${id}`)}
                        </p>
                      )}
                    </div>
                  );
                })}

                <div className="mb-6">
                  <label
                    htmlFor="contact-message"
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows={5}
                    aria-required="true"
                    aria-invalid={messageInvalid}
                    aria-describedby={messageInvalid ? "contact-message-error" : undefined}
                    className={fieldClass(messageInvalid)}
                    placeholder={t("contact.form.messagePlaceholder")}
                  ></textarea>
                  {messageInvalid && (
                    <p
                      id="contact-message-error"
                      className="mt-1 text-sm text-red-700 dark:text-red-300"
                    >
                      {t("contact.form.errors.message")}
                    </p>
                  )}
                </div>

                <div aria-hidden="true" className="sr-only">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    ref={honeypotRef}
                    type="text"
                    id="contact-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sending ? t("contact.form.sending") : t("contact.form.send")}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
