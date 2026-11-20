/* ONE place to edit your projects. Both index.html and projects.html read this file.
   name, desc, stack ........ shown on the card
   icon ..................... any Boxicons name (boxicons.com), hue = 0-360 card banner color
   cat ...................... filters it appears under on projects.html:
                              "frontend", "backend", "mern", "python"
   github, live ............. leave "" to hide that link
   The first VISIBLE projects (set in index.html) show before "View All Projects". */
const PROJECTS = [
  {
    name: "ResumeIQ",
    icon: "bx-file",
    hue: 265,
    badge: "AI platform",
    desc: "AI-powered resume analysis and interview preparation platform. It parses resumes against job descriptions, identifies skill gaps, generates interview questions and supports ATS-friendly resume generation with PDF export.",
    stack: ["React.js", "Node.js", "MongoDB Atlas", "JWT", "Gemini API"],
    cat: ["mern", "frontend", "backend"],
    github: "https://github.com/mehuld02/ResumeIQ",
    live: "https://resumeiq-frontend-i6ir.onrender.com/",
  },

  {
    name: "AlgoViz",
    icon: "bx-bar-chart-alt-2",
    hue: 30,
    badge: "DSA visualizer",
    desc: "Interactive algorithm visualizer covering 15+ algorithms across sorting, pathfinding and trees, with step-by-step visualization, comparison counters and Big-O analysis.",
    stack: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    cat: ["frontend"],
    github: "https://github.com/mehuld02/AlgoViz",
    live: "https://algo-viz-zeta.vercel.app/",
  },

  {
    name: "ChatApp",
    icon: "bx-chat",
    hue: 160,
    badge: "Real-Time Chat",
    desc: "A real-time chat application that allows users to communicate instantly, with a responsive interface and seamless messaging experience.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    cat: ["mern", "frontend", "backend"],
    github: "https://github.com/mehuld02/Realtime-Chat-App",
    live: "",
  },

  {
    name: "ACEVIEW",
    icon: "bx-show",
    hue: 200,
    badge: "AI Learning Plateform",
    desc: "AceView is an AI-powered learning and skill-development platform that helps users practice skills, solve doubts, participate in learning games, exchange skills, and prepare for mock interviews using AI.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Firebase",
      "Google Gemini API",
      "REST APIs",
    ],
    cat: ["mern", "frontend", "backend"],
    github: "https://github.com/mehuld02/Aceview",
    live: "",
  },

  {
    name: "TaskFlow",
    icon: "bx-bot",
    hue: 190,
    badge: "Task Management Dashboard",
    desc: "A task management dashboard that helps users organize, track, and manage tasks efficiently with an intuitive interface and real-time data visualization.",
    stack: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "MongoDB",
      "Recharts",
      "Shadcn UI",
      "JWT Authentication",
    ],
    cat: ["Frontend", "backend"],
    github: "https://github.com/mehuld02/TaskFlow",
    live: "",
  },

  {
    name: "Employee Attendance API",
    icon: "bx-cart",
    hue: 340,
    badge: "Backend app",
    desc: "A RESTful API designed to manage employee attendance records, handle employee data, and track attendance through structured backend operations.",
    stack: ["Python", "FastAPI", "MongoDB", "REST API", "JWT Authentication"],
    cat: ["Backend", "python"],
    github: "https://github.com/mehuld02//Employee-attendance-api",
    live: "",
  },

  {
    name: "FoodApp",
    icon: "bx-food-menu",
    hue: 25,
    badge: "Full Stack app",
    desc: "A food ordering application that allows users to explore food items, browse menus, and manage food orders through an interactive and user-friendly interface.",
    stack: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    cat: ["mern", "frontend", "backend"],
    github: "https://github.com/mehuld02/MERN-stack-food-Delivery-App",
    live: "",
  },

  {
    name: "Face Recognition System",
    icon: "bx-face",
    hue: 220,
    badge: "Python app",
    desc: "A face recognition-based attendance system that detects and recognizes registered faces using computer vision and automatically maintains attendance records.",
    stack: ["Python", "OpenCV", "Tkinter", "MySQL", "LBPH"],
    cat: ["backend", "python"],
    github: "https://github.com/mehuld02/Face-Recognition-System",
    live: "",
  },
];