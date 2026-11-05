import type { SiteInfo } from "../types";

const yearsOfExperience = 3;

export const site: SiteInfo = {
  name: { en: "Muhammad Muhammad", ar: "محمد محمد" },
  title: { en: "Full-Stack Web Developer", ar: "مطوّر ويب Full-Stack" },
  description: {
    en: `With ${yearsOfExperience}+ years of experience, I build secure, multilingual web applications end to end, from the database to deployment, using React, TypeScript, Node.js and PostgreSQL. Founder of KAREEM Group.`,
    ar: `بخبرة تزيد عن ${yearsOfExperience} سنوات، أبني تطبيقات ويب آمنة ومتعددة اللغات بشكل متكامل، من قاعدة البيانات حتى النشر، باستخدام React وTypeScript وNode.js وPostgreSQL. مؤسّس KAREEM Group.`,
  },
  aboutHeadline: {
    en: "Building reliable, multilingual web products end to end",
    ar: "أبني منتجات ويب موثوقة ومتعددة اللغات من الفكرة حتى النشر",
  },
  aboutParagraphs: [
    {
      en: `I'm a full-stack web developer with ${yearsOfExperience}+ years of experience and the founder of KAREEM Group, which provides software solutions. I work across the whole stack, with React, TypeScript and Tailwind CSS on the front end and Node.js, Express and PostgreSQL on the back end, and I take products from design all the way to deployment.`,
      ar: `أنا مطوّر ويب Full-Stack بخبرة تزيد عن ${yearsOfExperience} سنوات، ومؤسّس KAREEM Group التي تقدّم حلولاً برمجية. أعمل على جميع طبقات التطبيق، باستخدام React وTypeScript وTailwind CSS في الواجهة الأمامية وNode.js وExpress وPostgreSQL في الواجهة الخلفية، وأنقل المنتج من التصميم حتى النشر.`,
    },
    {
      en: "I recently built Kareem, a multi-branch inventory, sales and repairs platform, and an Employee Task Management platform with a Kanban board and live team chat, both with role-based access, secure APIs and automated tests. I focus on clean code, performance, security and user experience, and I build multilingual interfaces with full right-to-left support.",
      ar: "بنيتُ مؤخراً «كريم»، منصة متعددة الفروع لإدارة المخزون والمبيعات والصيانة، ومنصة لإدارة مهام الموظفين تضم لوحة كانبان ومحادثة مباشرة للفريق، وكلاهما بصلاحيات حسب الدور وواجهات برمجية آمنة واختبارات آلية. أركّز على الكود النظيف والأداء والأمان وتجربة المستخدم، وأبني واجهات متعددة اللغات بدعم كامل للاتجاه من اليمين إلى اليسار.",
    },
  ],
  url: "https://example.com",
  yearsOfExperience,
};
