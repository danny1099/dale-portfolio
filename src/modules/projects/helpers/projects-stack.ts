import { Project } from "@/modules/projects/types";

export const stackProjects: Project[] = [
    {
        id: 'p1-001',
        title: "EcoTrack",
        subtitle: "Environmental Monitoring App",
        tags: ["React Native", "Node.js", "MongoDB"],
        description: "A mobile application for tracking and reporting local environmental issues, promoting community engagement in sustainability efforts.",
        image: "/images/placeholder-project-1.svg"
      },
      {
        id: 'p1-002',
        title: "MindfulMinutes",
        subtitle: "Meditation and Mindfulness Platform",
        tags: ["Next js", "Express", "PostgreSQL"],
        description: "A web-based platform offering guided meditations, mindfulness exercises, and progress tracking for users' mental well-being journey.",
        image: "/images/placeholder-project-2.svg"
      },
      {
        id: 'p1-003',
        title: "CodeCollab",
        subtitle: "Real-time Collaborative IDE",
        tags: ["React", "Socket.io", "Docker"],
        description: "An online integrated development environment enabling multiple developers to code together in real-time, featuring live chat and version control integration.",
        image: "/images/placeholder-project-1.svg"
      },
      {
        id: 'p1-004',
        title: "HealthHub",
        subtitle: "Personalized Health Management System",
        tags: ["Angular", "Django", "TensorFlow"],
        description: "A comprehensive health management application using AI to provide personalized diet plans, workout routines, and health insights based on user data and goals.",
        image: "/images/placeholder-project-2.svg"
      }
] 