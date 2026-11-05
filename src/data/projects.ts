import type { Project } from "../types";
import kareemImage from "../assets/images/projects/kareem-ims.webp";
import taskManagementImage from "../assets/images/projects/employee-task-management.webp";

export const projects: Project[] = [
  {
    slug: "kareem-ims",
    title: { en: "Kareem | Inventory System", ar: "Kareem | Inventory System" },
    description: {
      en: "A full-stack, multi-branch platform for managing inventory, sales and repairs in retail shops. It covers serial and batch tracking, point-of-sale checkout, purchase orders, branch transfers, treasury, staff roles, offline support and three languages: English, Arabic and German.",
      ar: "منصة متكاملة متعددة الفروع لإدارة المخزون والمبيعات والصيانة في المتاجر. تشمل تتبّع الأرقام التسلسلية والدفعات، ونقطة البيع، وأوامر الشراء، والتحويل بين الفروع، والخزينة، وصلاحيات الموظفين، ودعم العمل دون اتصال، وتدعم العربية والإنجليزية والألمانية.",
    },
    imageAlt: {
      en: "Kareem dashboard showing store tools, repair status counts and a sales overview chart",
      ar: "لوحة تحكم كريم تعرض أدوات المتجر وأعداد حالات الصيانة ومخططاً لنظرة عامة على المبيعات",
    },
    image: kareemImage,
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    category: "management",
    liveUrl: "https://kareem-ims.pages.dev",
    featured: true,
  },
  {
    slug: "employee-task-management",
    title: { en: "Employee Task Management", ar: "Employee Task Management" },
    description: {
      en: "A full-stack platform for managing team work: tasks with a drag-and-drop Kanban board, comments and activity history, dashboard charts, notifications and live team chat, with role-based access for admins, managers and employees.",
      ar: "منصة متكاملة لإدارة عمل الفريق: مهام مع لوحة كانبان بالسحب والإفلات، وتعليقات وسجل نشاط، ولوحة معلومات برسوم بيانية، وإشعارات، ومحادثة مباشرة للفريق، مع صلاحيات حسب الدور للمسؤول والمدير والموظف.",
    },
    imageAlt: {
      en: "Task list with search and filters, a notifications panel and a form for creating a task",
      ar: "قائمة مهام مع بحث وعوامل تصفية، ولوحة إشعارات، ونموذج لإنشاء مهمة",
    },
    image: taskManagementImage,
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "WebSocket",
    ],
    category: "management",
    liveUrl: "https://employee-task-management-system.pages.dev/",
    repoUrl: "https://github.com/MuhammadGitAcc/Employee_Task_Management_System",
    featured: true,
  },
];
