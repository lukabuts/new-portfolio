export interface SkillGroup {
  label: string;
  path: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    path: "~/skills/frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS"],
  },
  {
    label: "Backend",
    path: "~/skills/backend",
    items: ["Node.js", "Express.js", "PHP", "Laravel", "GraphQL", "REST APIs"],
  },
  {
    label: "AI & Cloud",
    path: "~/skills/ai-cloud",
    items: ["Chatbot Development", "LLM Integration", "Prompt Engineering", "Google Cloud Platform"],
  },
  {
    label: "Databases",
    path: "~/skills/databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    label: "DevOps & Tools",
    path: "~/skills/devops",
    items: ["Linux", "Docker", "NGINX", "Git", "Cloudflare Tunnels"],
  },
];
