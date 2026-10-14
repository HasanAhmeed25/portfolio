import type { CurrentFocusItem } from '../types';

export const currentFocusData: CurrentFocusItem[] = [
  {
    id: "focus-fullstack",
    title: "Improving Full-Stack Skills",
    description:
      "Deepening mastery across the modern JavaScript & TypeScript ecosystem, scalable React patterns, robust Node.js backend services, and clean RESTful API design.",
    topics: [
      "Modern React architecture",
      "TypeScript type safety",
      "API optimization & error handling",
      "Authentication patterns"
    ],
    icon: "Layers"
  },
  {
    id: "focus-uiux",
    title: "Building Better UI/UX Experiences",
    description:
      "Studying design systems, typographic scale, micro-interactions, accessibility guidelines, and subtle 3D spatial interfaces that elevate user satisfaction.",
    topics: [
      "Design systems & component tokens",
      "Micro-animations & transitions",
      "Responsive accessibility (a11y)",
      "High-fidelity Figma wireframes"
    ],
    icon: "Sparkles"
  },
  {
    id: "focus-practical-software",
    title: "Creating Practical Software Projects",
    description:
      "Focusing on real-life utility software that solves tangible everyday problems for students, campuses, and communities with clear problem-solution fit.",
    topics: [
      "User-centric problem solving",
      "Product requirement roadmaps",
      "Clean modular code structure",
      "Maintainable documentation"
    ],
    icon: "Compass"
  },
  {
    id: "focus-iot-automation",
    title: "Exploring IoT & Intelligent Automation",
    description:
      "Advancing hardware-software integration through ESP32 boards, MQTT message brokers, smart sensor networks, and edge automation protocols.",
    topics: [
      "ESP32 dual-core processing",
      "MQTT telemetry & pub/sub brokers",
      "Low-power sensor telemetry",
      "Autonomous hardware control loops"
    ],
    icon: "Cpu"
  }
];
