import { Code2, Database, LayoutTemplate, Server, Settings, Smartphone } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Sujitha Perera",
    role: "Computer Science Undergraduate | Full-Stack Developer | AI/ML Enthusiast | DevOps | Software Engineering",
    headline: "Full-Stack Developer  |  AI/ML Enthusiast",
    location: "Rathnapura, Sri Lanka",
    email: "sujithascc1@gmail.com",
    phone: "0766238435",
    profilePhoto: "/profile.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/sujitha-perera-3549332a1",
      github: "https://github.com/Sujitha-Perera",
      resume: "/sujitha perera(cv).pdf",
    },
    about:
      "Motivated and dedicated fourth-year Computer Science undergraduate with strong software engineering fundamentals and full-stack development experience. Passionate about applying AI/ML to create real-world solutions. Seeking internship or entry-level opportunities. Quick learner, adaptable, good communication.",
  },
  education: [
    {
      degree: "BSc (Hons) in Computer Science and Technology (Undergraduate)",
      institution: "Sabaragamuwa University of Sri Lanka",
      duration: "2022–2026 Expected",
      details: "CGPA: 3.35",
    }
  ],
  skills: [
    {
      category: "Frontend",
      icon: LayoutTemplate,
      items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"],
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "NestJS"],
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MongoDB", "MySQL", "Redis"],
    },
    {
      category: "Languages",
      icon: Code2,
      items: ["JavaScript", "TypeScript", "Java", "Python"],
    },
    {
      category: "Tools",
      icon: Settings,
      items: ["Git", "GitHub", "VS Code", "Android Studio", "Figma", "Postman"],
    },
    {
      category: "DevOps/Cloud & Practices",
      icon: Smartphone,
      items: ["Docker", "CI/CD (GitHub Actions)", "AWS (Basics)", "OOP", "Agile", "DSA", "REST API", "Auth (JWT, Bcrypt)"],
    },
  ],
  projects: [
    {
      title: "SmartAgri",
      slug: "smartagri",
      shortDescription: "AI-Based Smart Agriculture Monitoring Web Application",
      overview: "A comprehensive full-stack smart farming web application featuring real-time weather monitoring and predictive AI models.",
      features: [
        "Real-time weather monitoring",
        "AI-based weather prediction using TensorFlow + Flask API",
        "Crop evaluation dashboard for farmers",
        "Secure authentication with JWT and Bcrypt",
        "Automated email notifications using Nodemailer",
        "Data visualization with Chart.js"
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Flask API", "TensorFlow", "Tailwind CSS", "shadcn/ui", "JWT", "Bcrypt", "Nodemailer", "Chart.js"],
      architecture: "Client-Server architecture with a React frontend, Node.js/Express core backend, and an isolated Flask API microservice serving the TensorFlow AI model.",
      challenges: "Integrating the Python-based TensorFlow predictive model with the Node.js backend smoothly.",
      learnings: "Deepened knowledge of microservice communication, AI model deployment strategies, and building secure real-time dashboards.",
      links: {
        github: "https://github.com/Sujitha-Perera/smart_farming_web_application",
        demo: "#"
      },
      image: "/projects/smartagri.png"
    },
    {
      title: "CineScope",
      slug: "cinescope",
      shortDescription: "Full-Stack Movie Dashboard",
      overview: "A fast, modern movie viewing dashboard with user management and customizable genres built using Next.js and MongoDB.",
      features: [
        "Secure authentication using Better Auth",
        "Full CRUD operations for movies, genres, and users",
        "Welcome email system for new user onboarding",
        "Highly responsive modern UI with Tailwind CSS and shadcn/ui"
      ],
      techStack: ["Next.js", "React", "Node.js", "MongoDB", "Better Auth", "Tailwind CSS", "shadcn/ui", "Vercel"],
      architecture: "Serverless monolith using Next.js App Router API routes directly communicating with MongoDB Atlas.",
      challenges: "Implementing a clean authentication flow with role-based dashboard views.",
      learnings: "Mastered Server Components in Next.js 14, Better Auth integration, and Vercel serverless deployment optimizations.",
      links: {
        github: "https://github.com/Sujitha-Perera/cinescope-dashboard",
        demo: "https://cinescope-dashboard.vercel.app"
      },
      image: "/projects/cinescope.png"
    },
    {
      title: "AI Chatbot Web App",
      slug: "ai-chatbot",
      shortDescription: "Interactive AI Chatbot UI using OpenRouter DeepSeek",
      overview: "An interactive, real-time AI conversational interface integrated into a web application using deep learning language models.",
      features: [
        "Interactive chatbot UI embedded in HTML",
        "Backend handler for secure API requests",
        "OpenRouter DeepSeek API integration for real-time AI responses",
        "Dynamic message rendering and clear chat interface"
      ],
      techStack: ["React", "HTML", "CSS", "Node.js", "Express.js", "OpenRouter DeepSeek API"],
      architecture: "React frontend communicating with an Express middleware backend to securely handle OpenRouter API keys.",
      challenges: "Managing asynchronous text streaming and handling external API latency gracefully.",
      learnings: "Improved skills in asynchronous JavaScript, working with LLM APIs, and state management in chat interfaces.",
      links: {
        github: "https://github.com/Sujitha-Perera/Chatbot-project",
        demo: "#"
      },
      image: "/projects/chatbot.png"
    },
    {
      title: "User Management System",
      slug: "user-management",
      shortDescription: "MERN Stack User Management Project",
      overview: "A robust user administration panel offering full Create, Read, Update, Delete (CRUD) mechanics.",
      features: [
        "Simple and intuitive user management system",
        "Full frontend-backend integration",
        "Scalable REST API endpoints"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Postman"],
      architecture: "Standard MERN stack architecture with separated frontend and backend repositories.",
      challenges: "Ensuring state synchronization between the React client and the MongoDB database.",
      learnings: "Solidified understanding of the React use cases, REST API routing, and testing via Postman.",
      links: {
        github: "#",
        demo: "#"
      },
      image: "/projects/user-management.png"
    },
    {
      title: "Simple E-Commerce",
      slug: "e-commerce",
      shortDescription: "React + TypeScript Modular E-Commerce App (Ongoing)",
      overview: "A modern, type-safe e-commerce shopping experience with a simulated checkout flow.",
      features: [
        "Product listing and details page",
        "Cart management and checkout flow",
        "Modular architecture with strict type safety"
      ],
      techStack: ["React", "TypeScript", "Node.js", "Express", "REST API"],
      architecture: "Component-driven design on the frontend with a REST API backend emphasizing type safety across the stack.",
      challenges: "Structuring complex state (cart, products, user sessions) cleanly using TypeScript interfaces.",
      learnings: "Enhanced TypeScript profiling, advanced React component typing, and modular folder architectures.",
      links: {
        github: "https://github.com/Sujitha-Perera/Ecommerce-web-project-ts-",
        demo: "#"
      },
      image: "/projects/storexpress.png"
    }
  ],
  certifications: [
    {
      title: "JavaScript From Scratch (Part 1 – Beginner)",
      issuer: "Udemy",
    },
    {
      title: "JavaScript Master Course From Beginner To Expert Developer",
      issuer: "Udemy",
    },
    {
      title: "Certification in React JS Master Course",
      issuer: "Epic Learn Institute of Higher Education",
    },
    {
      title: "Python Basics",
      issuer: "KodeKloud",
    }
  ],
  stats: [
    { value: "5+", label: "Full-Stack Projects" },
    // { value: "3.35", label: "CGPA" },
    { value: "2+", label: "AI/ML Integrations" },
  ]
};
