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
    title: "AI & Full-Stack Developer",
    company: "GeoSoft",
    link: "https://geosoft.ge",
    period: "11/2024 — Present",
    summary:
      "Building conversational AI products alongside full-stack web applications, with infrastructure running on Google Cloud.",
    highlights: [
      "Designing and developing AI-driven chatbots, from conversation flow to integration.",
      "Building and deploying full-stack applications with React, Next.js, Node.js, and Laravel.",
      "Deploying and managing services on Google Cloud Platform (GCP).",
      "Managing Linux servers and hosting via Cloudflare Tunnels.",
      "Mentoring junior developers through workshops and one-on-one sessions.",
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "Laravel",
      "GCP",
      "Chatbots",
      "Linux",
    ],
  },
  {
    title: "Frontend Developer & Mentor",
    company: "UniLab",
    link: "https://www.linkedin.com/company/unilab-edu",
    period: "11/2023 — 10/2024",
    summary:
      "Shipped client work as part of a five-person team, owning frontend builds end to end and supporting newer developers.",
    highlights: [
      "Delivered 14+ projects for ~10 clients within a 5-person team using React, TypeScript, and SCSS.",
      "Liaised directly with clients and team leads to gather requirements and ship on schedule.",
      "Mentored 3 interns in frontend development best practices.",
    ],
    stack: ["React", "TypeScript", "SCSS", "Git"],
  },
];
