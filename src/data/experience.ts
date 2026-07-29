export interface ExperienceEntry {
  title: string;
  company: string;
  link?: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Cloud & AI Engineer",
    company: "Geosoft",
    period: "06/2026 - Present",
    summary:
      "Designing and deploying AI chatbots, production-facing agents, and automation workflows for client websites and internal operations.",
    highlights: [
      "Design and deploy AI chatbots with custom knowledge bases on Google Cloud Run, integrating Google Calendar meeting booking and visitor contact capture for client websites.",
      "Built a Gemini Enterprise agent connected to production MySQL databases, enabling natural-language data analysis for business stakeholders.",
      "Automated a company-wide 2FA compliance workflow that detects unprotected accounts and sends employees guided activation reminders.",
    ],
    stack: [
      "GCP",
      "Cloud Run",
      "Vertex AI / Gemini",
      "MySQL",
      "Automation",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Tugonn Schweiz · Remote (Switzerland)",
    period: "06/2026 - Present",
    summary:
      "Building a social community platform end to end with a distributed remote team.",
    highlights: [
      "Building a social community platform end-to-end using Next.js and NestJS in a distributed remote team.",
      "Collaborate daily across countries and time zones using async communication and structured code review.",
    ],
    stack: ["Next.js", "NestJS", "TypeScript"],
  },
  {
    title: "Full Stack Developer",
    company: "Personal Projects",
    period: "11/2025 - 05/2026",
    summary:
      "Designed and shipped full-stack applications end to end, then self-hosted them on a home Linux server behind Cloudflare Tunnels.",
    highlights: [
      "Designed and built full-stack web applications end-to-end using React, Next.js, Node.js, PHP, and Laravel; self-hosted on a home Linux server via Cloudflare Tunnels.",
      "Shipped and maintained 4+ public projects, including an e-commerce platform, a multilingual task manager, and a trading tracker with 100+ active users.",
    ],
    stack: ["React", "Next.js", "Node.js", "PHP", "Laravel"],
  },
  {
    title: "Frontend Developer & Lector",
    company: "UniLab",
    period: "11/2024 - 10/2025",
    summary:
      "Delivered client work in a small team while mentoring interns and supporting projects from requirements through delivery.",
    highlights: [
      "Delivered 14+ projects for ~10 clients within a 5-person team using React, TypeScript, SCSS, and Tailwind CSS.",
      "Liaised with clients and team leads to gather requirements and ship on schedule; mentored 3 interns in frontend best practices.",
    ],
    stack: ["React", "TypeScript", "SCSS", "Tailwind CSS"],
  },
];
