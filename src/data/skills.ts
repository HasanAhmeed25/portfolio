import type { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven architecture, hooks, state management, and modern client-side rendering.",
    iconName: "Atom",
    highlights: ["Components", "Hooks", "Virtual DOM", "SPA"]
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    description: "Core asynchronous programming, DOM manipulation, promises, fetch API, and modern syntax.",
    iconName: "FileCode",
    highlights: ["Async/Await", "Closures", "Fetch API", "ES Modules"]
  },
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic page structure, modern accessibility standards, web forms, and document outlines.",
    iconName: "Code2",
    highlights: ["Semantic Elements", "Forms", "Accessibility", "SEO"]
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "Frontend",
    description: "Responsive layouts with Flexbox and CSS Grid, transitions, animations, and Tailwind styling.",
    iconName: "Palette",
    highlights: ["Flexbox", "CSS Grid", "Tailwind CSS", "Animations"]
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    description: "Server-side runtime for building non-blocking APIs, server utilities, and service workflows.",
    iconName: "Server",
    highlights: ["Event Loop", "NPM Ecosystem", "REST Backends", "CLI Tools"]
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Lightweight routing framework for structuring RESTful endpoints, middleware, and request validation.",
    iconName: "Route",
    highlights: ["REST APIs", "Middleware", "Route Controllers", "CORS"]
  },
  {
    name: "Python",
    category: "Backend",
    description: "Scripting, algorithm implementations, data manipulation, and automation utilities.",
    iconName: "Terminal",
    highlights: ["Scripting", "Automation", "Data Parsing", "OOP"]
  },
  {
    name: "PHP",
    category: "Backend",
    description: "Server-side scripting, form handling, dynamic HTML generation, and database interactions.",
    iconName: "FileSpreadsheet",
    highlights: ["Form Processing", "Sessions", "Server Scripting", "MySQL Interop"]
  },

  // Databases & Integrations
  {
    name: "MySQL",
    category: "Databases & Integrations",
    description: "Relational database modeling, normalized schemas, joins, queries, and data integrity.",
    iconName: "Database",
    highlights: ["Relational Schema", "CRUD Queries", "Foreign Keys", "Data Integrity"]
  },
  {
    name: "Firebase",
    category: "Databases & Integrations",
    description: "Cloud Firestore, real-time database paradigms, authentication patterns, and cloud storage.",
    iconName: "Flame",
    highlights: ["Firestore", "Realtime Data", "Auth Concepts", "BaaS"]
  },
  {
    name: "REST APIs",
    category: "Databases & Integrations",
    description: "Designing and consuming standard RESTful interfaces with JSON data payloads.",
    iconName: "Network",
    highlights: ["HTTP Methods", "JSON Contracts", "Headers", "Status Codes"]
  },
  {
    name: "Google Sheets Integration",
    category: "Databases & Integrations",
    description: "Leveraging Google Apps Script and Sheets APIs as a lightweight structured datastore for web apps.",
    iconName: "Sheet",
    highlights: ["Apps Script", "Webhooks", "Lightweight Store", "Spreadsheet API"]
  },
  {
    name: "localStorage & Web Storage",
    category: "Databases & Integrations",
    description: "Client-side state persistence for cart management, user session states, and offline preferences.",
    iconName: "HardDrive",
    highlights: ["Key-Value Storage", "Client State", "Cache", "JSON Persistence"]
  },

  // IoT & Embedded Systems
  {
    name: "ESP8266 & ESP32",
    category: "IoT & Embedded Systems",
    description: "Wi-Fi enabled microcontrollers for smart device automation, edge sensing, and remote actuation.",
    iconName: "Cpu",
    highlights: ["Wi-Fi WebServer", "GPIO Control", "Deep Sleep", "OTA Updates"]
  },
  {
    name: "Arduino C++",
    category: "IoT & Embedded Systems",
    description: "Embedded programming for sensor polling, actuator drivers, interrupt handling, and serial comms.",
    iconName: "Binary",
    highlights: ["Arduino IDE", "Interrupts", "Analog/Digital I/O", "Libraries"]
  },
  {
    name: "Sensors & Actuators",
    category: "IoT & Embedded Systems",
    description: "Interfacing LDR, PIR motion sensors, voltage sensors, relays, ultrasonic, and DHT modules.",
    iconName: "Radio",
    highlights: ["LDR Light Sensor", "PIR Motion", "Voltage Dividers", "Relays"]
  },
  {
    name: "MQTT & Blynk",
    category: "IoT & Embedded Systems",
    description: "Lightweight publish-subscribe telemetry messaging and IoT dashboard interfaces.",
    iconName: "Activity",
    highlights: ["Pub/Sub Protocol", "IoT Dashboards", "Low Latency", "Remote Control"]
  },
  {
    name: "Wi-Fi Communication",
    category: "IoT & Embedded Systems",
    description: "Access Point (AP) mode, Station (STA) mode, HTTP endpoints on chip, and local networks.",
    iconName: "Wifi",
    highlights: ["STA & AP Modes", "HTTP Server on Chip", "TCP/IP", "WebSockets"]
  },

  // Design & Tools
  {
    name: "Figma",
    category: "Design & Tools",
    description: "User interface prototyping, component libraries, wireframing, and interactive design layouts.",
    iconName: "Figma",
    highlights: ["Wireframing", "UI Prototyping", "Components", "Design Systems"]
  },
  {
    name: "UI/UX Principles",
    category: "Design & Tools",
    description: "Visual hierarchy, typography rhythm, intuitive user flows, accessibility, and clean aesthetics.",
    iconName: "Layout",
    highlights: ["Visual Hierarchy", "Spacing", "Micro-interactions", "Usability"]
  },
  {
    name: "Git & GitHub",
    category: "Design & Tools",
    description: "Version control workflows, commit history, branching, and collaborative open-source tooling.",
    iconName: "GitBranch",
    highlights: ["Version Control", "Branches", "Repositories", "Workflows"]
  },
  {
    name: "VS Code",
    category: "Design & Tools",
    description: "Primary engineering environment with customized tooling, linting, extensions, and debugging.",
    iconName: "Monitor",
    highlights: ["Extensions", "Debugging", "Snippets", "Integrated Terminal"]
  }
];
