type Project = {
  name: string;
  category: string;
  date: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  imageUrl: string;
};

export const projects: Project[] = [
  {
    name: "Live Recorder",
    category: "Full-stack",
    date: "last year",
    description:
      "Managing game data with PostgreSQL, providing APIs, Jest-tested, ensuring smooth operations across environments.",
    tech: [
      "nextjs",
      "ts",
      "reactjs",
      "nodejs",
      "socketio",
      "tailwind",
      "openai",
      "webrtc",
      "express",
    ],
    github: "https://github.com/KarlieKKY/next-chat-app.git",
    demo: "https://github.com/KarlieKKY/next-chat-app.git",
    imageUrl: "/images/thumbnail-decorating.jpg",
  },
  {
    name: "Sync-In",
    category: "full-stack",
    date: "last year",
    description:
      "Managing game data with PostgreSQL, providing APIs, Jest-tested, ensuring smooth operations across environments.",
    tech: [
      "nextjs",
      "ts",
      "python",
      "reactjs",
      "tailwind",
      "openai",
      "nodejs",
      "shadcn",
      "fastapi",
      "uvicorn",
      "spacyllm",
      "langchain",
      "llamaindex",
      "neo4j",
    ],
    github: "https://github.com/KarlieKKY/nc-games.git",
    demo: "https://nc-games-s0lm.onrender.com/api",
    imageUrl: "/images/thumbnail-decorating.jpg",
  },
  {
    name: "CV Generator",
    category: "full-stack",
    date: "last year",
    description:
      "Managing game data with PostgreSQL, providing APIs, Jest-tested, ensuring smooth operations across environments.",
    tech: [
      "js",
      "nodejs",
      "express",
      "postgresql",
      "jest",
      "husky",
      "supertest",
      "pgFormat",
    ],
    github: "https://github.com/KarlieKKY/nc-games.git",
    demo: "https://nc-games-s0lm.onrender.com/api",
    imageUrl: "/images/thumbnail-decorating.jpg",
  },
  {
    name: "Stray Whiskers",
    category: "full-stack",
    date: "last year",
    description:
      "Managing game data with PostgreSQL, providing APIs, Jest-tested, ensuring smooth operations across environments.",
    tech: ["python", "pygame", "flask", "openai", "postgresql"],
    github: "https://github.com/KarlieKKY/nc-games.git",
    demo: "https://nc-games-s0lm.onrender.com/api",
    imageUrl: "/images/thumbnail-decorating.jpg",
  },
  {
    name: "Board game forum",
    category: "frontend",
    date: "last year",
    description:
      "Managing game data with PostgreSQL, providing APIs, Jest-tested, ensuring smooth operations across environments.",
    tech: [
      "js",
      "nodejs",
      "express",
      "postgresql",
      "jest",
      "husky",
      "supertest",
      "pgFormat",
    ],
    github: "https://github.com/KarlieKKY/nc-games.git",
    demo: "https://nc-games-s0lm.onrender.com/api",
    imageUrl: "/images/thumbnail-decorating.jpg",
  },
  {
    name: "Board game forum",
    category: "BACKEND",
    date: "last year",
    description:
      "Managing game data with PostgreSQL, providing APIs, Jest-tested, ensuring smooth operations across environments.",
    tech: [
      "js",
      "nodejs",
      "express",
      "postgresql",
      "jest",
      "husky",
      "supertest",
      "pgFormat",
    ],
    github: "https://github.com/KarlieKKY/nc-games.git",
    demo: "https://nc-games-s0lm.onrender.com/api",
    imageUrl: "/images/thumbnail-decorating.jpg",
  },
];
