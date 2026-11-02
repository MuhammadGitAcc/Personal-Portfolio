import emailjs from "@emailjs/browser";

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactMessage(message: ContactMessage): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("The contact form is not configured (missing VITE_EMAILJS_* variables).");
  }

  await emailjs.send(serviceId, templateId, message, { publicKey });
}
