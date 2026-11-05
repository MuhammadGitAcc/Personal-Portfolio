import type { Job, LocalizedText } from "../types";

const remote: LocalizedText = { en: "Remote", ar: "عن بُعد" };

export const experience: Job[] = [
  {
    id: "kareem-group",
    role: { en: "Founder & Full-Stack Developer", ar: "مؤسّس ومطوّر ويب Full-Stack" },
    company: { en: "KAREEM Group", ar: "KAREEM Group" },
    location: remote,
    duration: { en: "Jan 2026 – Present", ar: "يناير 2026 – حتى الآن" },
    description: {
      en: "Founded KAREEM Group to provide software solutions, and designed, built and deployed its first two products end to end: Kareem, a multi-branch inventory, sales and repairs platform, and an Employee Task Management platform with a Kanban board, live team chat and role-based access. Built secure, tested APIs with JWT authentication, rate limiting and input validation, and deployed both products to the cloud with protected main branches and required automated checks.",
      ar: "أسّستُ KAREEM Group لتقديم حلول برمجية، وصمّمتُ أول منتجين لها وبنيتُهما ونشرتُهما من البداية إلى النهاية: «كريم» منصة متعددة الفروع لإدارة المخزون والمبيعات والصيانة، ومنصة لإدارة مهام الموظفين تضم لوحة كانبان ومحادثة مباشرة للفريق وصلاحيات حسب الدور. بنيتُ واجهات برمجية (APIs) آمنة ومختبَرة تشمل مصادقة JWT وتحديد معدل الطلبات والتحقق من المدخلات، ونشرتُ المنتجين على السحابة مع حماية الفرع الرئيسي وفحوصات آلية إلزامية.",
    },
    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "WebSocket",
    ],
  },
  {
    id: "codex",
    role: { en: "Full-Stack Web Developer", ar: "مطوّر ويب Full-Stack" },
    company: { en: "Codex", ar: "Codex" },
    location: remote,
    duration: { en: "Sep 2025 – Dec 2025", ar: "سبتمبر 2025 – ديسمبر 2025" },
    description: {
      en: "Developed end-to-end web applications using modern full-stack technologies. Built responsive front-end interfaces with React.js and Next.js and implemented scalable back-end solutions with Node.js and Express. Designed RESTful APIs, integrated databases, and deployed applications on cloud platforms to deliver performant, maintainable systems across the entire stack.",
      ar: "طوّرتُ تطبيقات ويب متكاملة باستخدام تقنيات Full-Stack الحديثة. بنيتُ واجهات أمامية متجاوبة باستخدام React.js وNext.js، ونفّذتُ حلولاً خلفية قابلة للتوسّع باستخدام Node.js وExpress. صمّمتُ واجهات REST API، وربطتُ قواعد البيانات، ونشرتُ التطبيقات على المنصات السحابية لتقديم أنظمة عالية الأداء وسهلة الصيانة على مستوى التطبيق بالكامل.",
    },
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "techline-group",
    role: { en: "React Developer", ar: "مطوّر React" },
    company: { en: "TechLine Group", ar: "TechLine Group" },
    location: remote,
    duration: { en: "Jan 2025 – May 2025", ar: "يناير 2025 – مايو 2025" },
    description: {
      en: "Developed dynamic, responsive web applications with React.js, collaborating with cross-functional teams to deliver high-performance front-end solutions. Optimized user interfaces, integrated RESTful APIs, and ensured smooth user experiences, following modern practices such as component-based architecture, state management, and reusable code.",
      ar: "طوّرتُ تطبيقات ويب ديناميكية ومتجاوبة باستخدام React.js، وتعاونتُ مع فرق متعددة التخصصات لتقديم حلول واجهات أمامية عالية الأداء. عملتُ على تحسين واجهات المستخدم وربطها بواجهات REST API وضمان تجربة استخدام سلسة، مع الالتزام بممارسات التطوير الحديثة مثل البنية المعتمدة على المكوّنات وإدارة الحالة وإعادة استخدام الكود.",
    },
    skills: ["React.js", "TypeScript", "Tailwind CSS", "ECMAScript", "Git", "REST APIs"],
  },
  {
    id: "future-learning",
    role: { en: "React Developer", ar: "مطوّر React" },
    company: { en: "Future Learning", ar: "Future Learning" },
    location: remote,
    duration: { en: "Jul 2024 – Dec 2024", ar: "يوليو 2024 – ديسمبر 2024" },
    description: {
      en: "Built dynamic, responsive web applications with React.js for an innovative digital education platform. Developed interactive user interfaces, optimized performance, and collaborated with cross-functional teams to deliver smooth learning experiences, using modern front-end technologies to create scalable solutions that improve user engagement and accessibility.",
      ar: "بنيتُ تطبيقات ويب ديناميكية ومتجاوبة باستخدام React.js لمنصة تعليم رقمي مبتكرة. طوّرتُ واجهات مستخدم تفاعلية، وحسّنتُ الأداء، وتعاونتُ مع فرق متعددة التخصصات لتقديم تجارب تعلّم سلسة، مستخدماً تقنيات الواجهات الأمامية الحديثة لبناء حلول قابلة للتوسّع تعزّز تفاعل المستخدمين وسهولة الوصول.",
    },
    skills: ["React.js", "TypeScript", "Bootstrap", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "softtech",
    role: { en: "Front-End Web Developer", ar: "مطوّر ويب للواجهات الأمامية" },
    company: { en: "SoftTech", ar: "SoftTech" },
    location: remote,
    duration: { en: "Dec 2023 – May 2024", ar: "ديسمبر 2023 – مايو 2024" },
    description: {
      en: "Developed modern, responsive web applications with React.js, focusing on performance, accessibility, and smooth user experiences. Worked with cross-functional teams to turn design mockups into functional interfaces with clean, maintainable code, and optimized the front-end architecture and API integrations to deliver scalable solutions aligned with business goals.",
      ar: "طوّرتُ تطبيقات ويب حديثة ومتجاوبة باستخدام React.js مع التركيز على الأداء وسهولة الوصول وتجربة استخدام سلسة. تعاونتُ مع فرق متعددة التخصصات لتحويل تصاميم الواجهات إلى واجهات فعّالة بكود نظيف وسهل الصيانة، وحسّنتُ بنية الواجهة الأمامية وتكاملها مع واجهات برمجة التطبيقات لتقديم حلول قابلة للتوسّع تتوافق مع أهداف العمل.",
    },
    skills: ["React.js", "TypeScript", "Node.js", "Vite", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    id: "syrian-tech-solutions",
    role: { en: "UX Designer", ar: "مصمّم تجربة مستخدم (UX)" },
    company: { en: "Syrian Tech Solutions", ar: "Syrian Tech Solutions" },
    location: remote,
    duration: { en: "Jul 2023 – Sep 2023", ar: "يوليو 2023 – سبتمبر 2023" },
    description: {
      en: "Worked as a UX Designer creating intuitive, user-friendly digital experiences. Collaborated with developers and product teams to design wireframes, prototypes, and high-fidelity interfaces in Figma. Conducted user research and refined designs based on feedback, aligning interfaces with business goals and user needs to improve usability and engagement across web and mobile platforms.",
      ar: "عملتُ مصمّم تجربة مستخدم (UX)، وركّزتُ على تقديم تجارب رقمية بديهية وسهلة الاستخدام. تعاونتُ مع المطوّرين وفرق المنتج لتصميم هياكل الصفحات (Wireframes) والنماذج الأولية والواجهات عالية الدقة باستخدام Figma. أجريتُ أبحاث المستخدمين وحسّنتُ التصاميم بناءً على الملاحظات، بما يوائم الواجهات مع أهداف العمل واحتياجات المستخدمين ويرفع سهولة الاستخدام والتفاعل على منصات الويب والجوال.",
    },
    skills: ["UI/UX Design", "Figma", "CSS"],
  },
  {
    id: "ntt-data",
    role: { en: "WordPress Developer", ar: "مطوّر WordPress" },
    company: { en: "NTT Data Business Solutions", ar: "NTT Data Business Solutions" },
    location: remote,
    duration: { en: "Oct 2022 – Apr 2023", ar: "أكتوبر 2022 – أبريل 2023" },
    description: {
      en: "Developed high-performance WordPress solutions, creating custom themes, plugins, and WooCommerce integrations. Built secure, scalable websites with clean code and a good user experience, and collaborated with teams to deliver business-aligned digital solutions using PHP, JavaScript, and modern development practices.",
      ar: "طوّرتُ حلول WordPress عالية الأداء، شملت قوالب وإضافات مخصّصة وتكاملات مع WooCommerce. بنيتُ مواقع آمنة وقابلة للتوسّع بكود نظيف وتجربة استخدام جيدة، وتعاونتُ مع الفرق لتقديم حلول رقمية تتوافق مع أهداف العمل باستخدام PHP وJavaScript وممارسات التطوير الحديثة.",
    },
    skills: ["WordPress", "JavaScript", "UI/UX Design"],
  },
];
