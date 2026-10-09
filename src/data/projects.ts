export type ProjectCategory = "Full-Stack" | "Frontend" | "AI & Bots";

export interface Project {
   title: string;
   role: string;
   description: string;
   skills: string[];
   categories: ProjectCategory[];
   featured?: boolean;
   liveDemoUrl?: string;
   githubUrl?: string;
}

export const projects: Project[] = [
   {
      title: "AI Chatbot Platform",
      role: "Cloud & AI Engineer",
      description:
         "A no-code, n8n-style admin panel for building and managing AI chatbots on Google Cloud, so non-technical staff can set up client chatbots without knowing GCP. Each chatbot gets a system prompt, a file or written knowledge base, MCP servers, and Google Docs access. Every chatbot also auto-provisions a hosted client portal where customers deploy it to their website via CDN, Viber, Telegram, and Meta (Messenger, Instagram), and manage conversations together as a team.",
      skills: [
         "Google Cloud",
         "Vertex AI / Gemini",
         "MCP",
         "Chatbots",
         "Telegram",
         "Viber",
         "Meta Messenger API",
      ],
      categories: ["AI & Bots", "Full-Stack"],
      featured: true,
   },
   {
      title: "Tugonn Community",
      role: "Full Stack Developer",
      description:
         "A social media platform for community, built end to end with the Tugonn team in a distributed remote setup. I work on both the frontend and the backend, from the Next.js interface to the NestJS API on PostgreSQL.",
      skills: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
      categories: ["Full-Stack"],
      featured: true,
      liveDemoUrl: "https://tug-onn-students-front-end-v2.vercel.app/",
   },
   {
      title: "MetaScan",
      role: "Full Stack Developer",
      description:
         "An Ethereum wallet explorer for tracking balances and activity across chains. Connects via MetaMask, follows ERC-20 token balances, and lists paginated transaction history with live price data and caching across Ethereum, Polygon, and BNB.",
      skills: [
         "React",
         "TypeScript",
         "Fastify",
         "Node.js",
         "ethers.js",
         "Blockchain",
      ],
      categories: ["Full-Stack"],
      featured: true,
      liveDemoUrl: "https://wallet-explorer.vercel.app/",
      githubUrl: "https://github.com/lukabuts/wallet-explorer-back",
   },
   {
      title: "Task Manager App",
      role: "Full Stack Developer & Designer",
      description:
         "A task manager with full CRUD, profile images, a Georgian/English interface, and dark/light themes. Self-hosted on a Raspberry Pi behind NGINX and a Cloudflare Tunnel - built and shipped end to end, including infrastructure.",
      skills: [
         "Laravel",
         "React",
         "Inertia.js",
         "PHP",
         "Tailwind CSS",
         "MySQL",
         "Cloudflare Tunnel",
         "NGINX",
      ],
      categories: ["Full-Stack"],
      featured: true,
      liveDemoUrl: "https://task-manager.lukabuts.site",
      githubUrl: "https://github.com/lukabuts/task-manager",
   },
   {
      title: "Product Store",
      role: "Full Stack Developer",
      description:
         "A storefront with category browsing, product details, a cart, and order placement, backed by a custom PHP GraphQL API on MySQL. The API is self-hosted on a Raspberry Pi and exposed securely through a Cloudflare Tunnel.",
      skills: [
         "React",
         "TypeScript",
         "Tailwind CSS",
         "GraphQL",
         "PHP",
         "MySQL",
         "Cloudflare Tunnel",
      ],
      categories: ["Full-Stack"],
      featured: true,
      liveDemoUrl: "https://scandiweb-test-luka.vercel.app/",
      githubUrl: "https://github.com/lukabuts/scandiweb-test-task-frontend",
   },
   {
      title: "Real Estate Manager",
      role: "Frontend Developer",
      description:
         "A listings platform for adding, filtering, and inspecting properties in detail, with form validation and infinite scroll backed by a REST API.",
      skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "REST APIs"],
      categories: ["Full-Stack"],
      featured: true,
      liveDemoUrl: "https://redberry2-project-luka-butskhrikidze.vercel.app/",
      githubUrl: "https://github.com/lukabuts/redberry2",
   },
   {
      title: "Galaxy Chronicles",
      role: "Frontend Developer & Designer",
      description:
         "An explorer for the Star Wars universe - characters, films, starships, species, and planets - fetched from the SWAPI API with React Query and routed with React Router.",
      skills: ["React", "TypeScript", "Tailwind CSS", "React Query"],
      categories: ["Frontend"],
      liveDemoUrl: "https://devs-data-junior-frontend-recruitment.vercel.app/",
      githubUrl:
         "https://github.com/lukabuts/DevsData-JuniorFrontend-Recruitment",
   },
   {
      title: "Jobly - Search Jobs",
      role: "Frontend Developer",
      description:
         "A job search app that pulls live listings from an API and gives candidates a focused interface for browsing and applying.",
      skills: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
      categories: ["Frontend"],
      liveDemoUrl: "https://job-search-code-with-luka.vercel.app/",
      githubUrl: "https://github.com/lukabuts/JobSearch",
   },
   {
      title: "Blog Manager",
      role: "Frontend Developer",
      description:
         "A content management interface for writing and scheduling posts, with category filtering and a fully responsive layout. Frontend only, designed to slot in front of any REST backend.",
      skills: ["React", "TypeScript", "Tailwind CSS", "RESTful APIs"],
      categories: ["Frontend"],
      liveDemoUrl: "https://redberry-luka-butskhrikidze.vercel.app/",
      githubUrl: "https://github.com/lukabuts/Redberry",
   },
   {
      title: "Dictionary",
      role: "Frontend Developer",
      description:
         "A dictionary app for looking up words, hearing pronunciations, and browsing definitions, synonyms, and example sentences via a public API.",
      skills: ["JavaScript", "HTML", "CSS", "API Integration"],
      categories: ["Frontend"],
      liveDemoUrl: "https://lukabuts.github.io/dictionary/",
      githubUrl: "https://github.com/lukabuts/dictionary",
   },
   {
      title: "E-Learning Platform",
      role: "Frontend Developer",
      description:
         "Refactored and debugged an existing codebase to cut load times and improve overall performance, with an emphasis on maintainable, readable code for the rest of the team.",
      skills: ["JavaScript", "HTML", "SCSS", "Debugging"],
      categories: ["Frontend"],
      liveDemoUrl: "https://edu.sandrosbooks.com/",
      githubUrl: "https://github.com/Mind1a/saganmanatlebloResursebi",
   },
];

export const categories: ProjectCategory[] = [
   "Full-Stack",
   "AI & Bots",
   "Frontend",
];
