import type { Degree, LocalizedText } from "../types";

const syria: LocalizedText = { en: "Syria", ar: "سوريا" };

export const education: Degree[] = [
  {
    id: "bachelor-software-engineering",
    degree: {
      en: "Bachelor's Degree in Software Engineering",
      ar: "بكالوريوس في هندسة البرمجيات",
    },
    institution: { en: "Al-Baath University", ar: "جامعة البعث" },
    location: syria,
    duration: { en: "2017 – 2022", ar: "2017 – 2022" },
  },
  {
    id: "master-web-science",
    degree: {
      en: "Academic Master in Web Science (MWS)",
      ar: "ماجستير أكاديمي في علوم الويب (MWS)",
    },
    institution: { en: "Syrian Virtual University", ar: "الجامعة الافتراضية السورية" },
    location: syria,
    duration: { en: "Oct 2023 – Nov 2025", ar: "أكتوبر 2023 – نوفمبر 2025" },
  },
];
