import type { SiteInfo } from "../types";

const yearsOfExperience = 3;

export const site: SiteInfo = {
  name: { en: "Muhammad Muhammad", ar: "محمد محمد" },
  title: { en: "Full-Stack Web Developer", ar: "مطوّر ويب Full-Stack" },
  description: {
    en: `With over ${yearsOfExperience} years of experience in web development and design, I build modern, responsive applications that prioritize user experience and are powered by clean, efficient code. I work across the full stack using React, TypeScript, Tailwind CSS on the front-end and Node.js, Python, PostgreSQL on the back-end.`,
    ar: `بخبرة تزيد عن ${yearsOfExperience} سنوات في تطوير الويب والتصميم، أبني تطبيقات حديثة ومتجاوبة تضع تجربة المستخدم في المقام الأول وتعتمد على كود نظيف وفعّال. أعمل على جميع طبقات التطبيق، من الواجهة الأمامية باستخدام React وTypeScript وTailwind CSS إلى الواجهة الخلفية باستخدام Node.js وPython وPostgreSQL.`,
  },
  url: "https://example.com",
  yearsOfExperience,
};
