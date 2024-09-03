type Project = {
  id: number | string;
  name: string;
  category: string;
  date: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  imageUrl: string;
  purpose: string;
};

export const projects: Project[] = [
  {
    id: 6,
    name: "Live Recorder",
    category: "Full-stack",
    date: "2024-07-18",
    description:
      "Streams and transcribes speech in real-time, offering seamless interaction with live text rendering for instant feedback.",
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
    purpose: "hello",
  },
  {
    id: 5,
    name: "Sync-In",
    category: "full-stack",
    date: "2024-03-18",
    description:
      "A study tool imports PDFs, generates 10 questions by analyzing related content, and allows users to answer and receive instant marks.",
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
    github: "https://github.com/KarlieKKY",
    demo: "https://github.com/KarlieKKY",
    imageUrl: "/images/thumbnail-decorating.jpg",
    purpose: "hello",
  },
  {
    id: 4,
    name: "Coverlit",
    category: "full-stack",
    date: "2023-09-18",
    description:
      "A CV generator crafts personalized cover letters by analyzing user details, company info, and job descriptions, streamlining job application processes.",
    tech: [
      "python",
      "streamlit",
      "openai",
      "weaviate",
      "llamaindex",
      "langchain",
    ],
    github: "https://github.com/tmkwong/coverlit.git",
    demo: "https://github.com/tmkwong/coverlit.git",
    imageUrl: "/images/thumbnail-decorating.jpg",
    purpose: "hello",
  },
  {
    id: 3,
    name: "Stray Whiskers",
    category: "full-stack",
    date: "2023-08-18",
    description:
      "A 2D game where users interact with stray cats, raising awareness about the challenges these animals face in real life.",
    tech: ["python", "pygame", "flask", "openai", "postgresql"],
    github: "https://gitfront.io/r/user-6459585/iJyMKCuL527u/Group4-CFG/",
    demo: "https://www.youtube.com/watch?v=qnKXL-lkglQ",
    imageUrl: "/images/thumbnail-decorating.jpg",
    purpose: "hello",
  },
  {
    id: 2,
    name: "Board game forum",
    category: "frontend",
    date: "2023-06-18",
    description:
      "A responsive forum frontend lets users like, dislike, and comment, featuring conditional rendering and functionality similar to Reddit for dynamic interactions.",
    tech: ["js", "vite", "reactjs", "axios"],
    github: "https://github.com/KarlieKKY/fe-nc-games",
    demo: "https://karlie-games.netlify.app/",
    imageUrl: "/images/thumbnail-decorating.jpg",
    purpose: "hello",
  },
  {
    id: 1,
    name: "Board game forum",
    category: "BACKEND",
    date: "2023-06-18",
    description:
      "A forum backend allows users to like, dislike, comment, and more, providing functionality similar to Reddit for engaging discussions.",
    tech: [
      "js",
      "nodejs",
      "express",
      "jest",
      "postgresql",
      // "husky",
      // "supertest",
      // "pgFormat",
    ],
    github: "https://github.com/KarlieKKY/nc-games.git",
    demo: "https://nc-games-s0lm.onrender.com/api",
    imageUrl: "/images/thumbnail-decorating.jpg",
    purpose: "hello",
  },
];
