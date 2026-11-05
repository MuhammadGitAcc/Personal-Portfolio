import type { SocialLink, SocialLinkId } from "../types";

const email = "muhammad.m.job@gmail.com";
const phoneDigits = "963995598704";

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: { en: "LinkedIn", ar: "لينكدإن" },
    href: "https://www.linkedin.com/in/muhammad-muhammad-217640173",
  },
  {
    id: "github",
    label: { en: "GitHub", ar: "جيت هاب" },
    href: "https://github.com/MuhammadGitAcc",
  },
  {
    id: "email",
    label: { en: "Email", ar: "البريد الإلكتروني" },
    href: `mailto:${email}`,
    display: email,
  },
  {
    id: "phone",
    label: { en: "Phone", ar: "الهاتف" },
    href: `tel:+${phoneDigits}`,
    display: "+963 995 598 704",
  },
  {
    id: "whatsapp",
    label: { en: "WhatsApp", ar: "واتساب" },
    href: `https://wa.me/${phoneDigits}`,
  },
  {
    id: "facebook",
    label: { en: "Facebook", ar: "فيسبوك" },
    href: "https://www.facebook.com/profile.php?id=100035195543126",
  },
  {
    id: "cv",
    label: { en: "CV", ar: "السيرة الذاتية" },
    href: {
      en: "/cv/Muhammad-Muhammad-CV-EN.pdf",
      ar: "/cv/Muhammad-Muhammad-CV-AR.pdf",
    },
  },
];

export function getSocialLink(id: SocialLinkId): SocialLink {
  const link = socialLinks.find((item) => item.id === id);
  if (!link) {
    throw new Error(`Missing social link: ${id}`);
  }
  return link;
}
