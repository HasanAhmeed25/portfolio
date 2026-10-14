import type { ProjectCaseStudy } from '../types';

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "solar-street-light",
    title: "Interconnected Solar Street Light System",
    category: "IoT · Embedded Systems · Web Dashboard",
    shortDescription:
      "A smart solar street-lighting system utilizing ESP8266 microcontrollers for intelligent ambient detection, battery telemetry, motion triggering, and remote web-based dashboard control.",
    status: "Working Hardware & IoT Prototype",
    isPlanned: false,
    technologies: [
      "ESP8266",
      "Arduino C++",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Wi-Fi",
      "Sensors (LDR, PIR)",
      "PWM Control"
    ],
    features: [
      "Remote ON/OFF manual override via local Wi-Fi web interface",
      "Individual light unit control and addressing",
      "Battery voltage monitoring and health percentage estimation",
      "PIR motion-triggered adaptive illumination (dim to bright upon movement)",
      "Automated daylight detection logic via calibrated LDR sensor",
      "Embedded web server hosted directly on the ESP8266 microcontroller"
    ],
    overview:
      "Street lighting in many institutional and municipal areas suffers from high energy waste and rigid schedules that ignore real-time sunlight levels and pedestrian presence. This project engineers a smart, decentralized solar streetlight system powered by an ESP8266 microcontroller. It combines solar charging telemetry, battery health tracking, motion-reactive lighting, and a responsive web monitoring dashboard accessible over local Wi-Fi.",
    motivation:
      "Traditional solar lighting operates on simple timers or fixed switches, leading to premature battery drain on overcast days and unlit pathways when students or pedestrians walk by late at night. The goal was to build a low-cost, connected system that maximizes battery life while providing full remote visibility and control.",
    proposedSolution:
      "Designed a dual-mode control architecture: an autonomous hardware loop that adjusts light levels based on ambient light (LDR) and motion detection (PIR), paired with an asynchronous web server running directly on the ESP8266. Operators can connect to the system's Wi-Fi network and access a lightweight browser dashboard to inspect battery voltage, toggle manual overrides, and adjust motion sensitivity thresholds.",
    architecture: {
      type: "iot-flow",
      nodes: [
        {
          title: "1. Sensing & Power Layer",
          description: "LDR reads daylight lux; PIR detects human presence; voltage divider measures battery level.",
          tech: "LDR, PIR, 12V/3.7V Battery, Divider Circuit"
        },
        {
          title: "2. Controller & Firmware",
          description: "ESP8266 executes state machine, reads ADC inputs, calculates battery health, and modulates PWM output.",
          tech: "ESP8266 NodeMCU, Arduino C++, FreeRTOS/Tick Timer"
        },
        {
          title: "3. Connectivity Layer",
          description: "Microcontroller acts as Wi-Fi Access Point (AP) or Station (STA), serving HTTP endpoints and REST JSON.",
          tech: "ESP8266WebServer, Wi-Fi 802.11 b/g/n, TCP/IP"
        },
        {
          title: "4. Web Monitoring UI",
          description: "Lightweight HTML/CSS/JS dashboard stored in flash memory, rendering live metrics and toggle controls.",
          tech: "Vanilla JS, CSS Grid, Chart UI, SPIFFS/PROGMEM"
        }
      ]
    },
    implementationDetails: [
      "Calibrated analog reading with voltage divider resistor pairs to prevent overvoltage on the ESP8266 3.3V ADC pin.",
      "Implemented PWM (Pulse Width Modulation) to keep lights at 25% standby brightness at night, jumping to 100% when PIR motion triggers.",
      "Embedded lightweight HTML/JS assets within flash memory using Arduino PROGMEM strings for instantaneous web dashboard loading.",
      "Built debounce logic in firmware to eliminate false triggers from transient shadows or electrical noise."
    ],
    challengesAndLearnings: [
      "ESP8266 single ADC constraint: required precision resistor matching and software filtering to smooth voltage readings under load.",
      "Power optimization: structured Wi-Fi beacon intervals to conserve battery power without disconnecting operator sessions.",
      "Deepened understanding of combining physical electronics with web-based telemetries and real-world embedded constraints."
    ],
    previewVisual: "iot"
  },
  {
    id: "srm-canteen",
    title: "SRM Canteen Web Application",
    category: "Web Development · Full Stack Concept",
    shortDescription:
      "A complete digital food ordering application concept tailored for campus canteens, featuring dynamic menu browsing, real-time cart calculations, instant bill generation, and order persistence.",
    status: "Functional Application Concept",
    isPlanned: false,
    technologies: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "JSON Datastore",
      "Google Sheets API",
      "localStorage"
    ],
    features: [
      "Dynamic menu categorizing breakfast, meals, snacks, and beverages",
      "Interactive cart with instant quantity increments, decrements, and live subtotal",
      "Form validation with student details and pickup timing selection",
      "Unique order ID generation with printable receipt and summary modal",
      "Automated order dispatch logging to structured Google Sheets / JSON backend",
      "Client-side session persistence so orders aren't lost on accidental page refresh"
    ],
    overview:
      "College canteens during peak lunch hours experience crowded counters, long queues, and paper receipt confusion. The SRM Canteen Web Application streamlines the entire ordering flow by providing students with a fast, mobile-friendly interface to browse available dishes, customize their cart, place orders digitally, and receive an automated order token for counter pickup.",
    motivation:
      "To eliminate chaotic rush-hour queues and minimize food waiting times on campus by digitizing the student ordering and receipt generation pipeline using accessible, lightweight web technologies.",
    proposedSolution:
      "Developed a clean, responsive single-page ordering interface connected to an Express backend. For lightweight deployment and administrative transparency, order records are synchronized into Google Sheets via webhooks, allowing canteen staff to see orders in real time without needing complex database management software.",
    architecture: {
      type: "fullstack-flow",
      nodes: [
        {
          title: "1. Client Ordering UI",
          description: "Responsive web interface with categorized menu cards, search filter, and active cart tray.",
          tech: "Semantic HTML5, CSS Flexbox/Grid, ES6 Modules"
        },
        {
          title: "2. State & Cart Manager",
          description: "Synchronizes cart items, quantity counts, item totals, and user preferences with localStorage.",
          tech: "Vanilla JS State Engine, Web Storage API"
        },
        {
          title: "3. Express API Gateway",
          description: "Receives checkout payload, validates item availability, calculates final bill, and assigns Order ID.",
          tech: "Node.js, Express.js, CORS, JSON Middleware"
        },
        {
          title: "4. Data Store & Staff View",
          description: "Logs order records directly into Google Sheets datastore and generates digital receipt token.",
          tech: "Google Apps Script, REST Webhook, Structured JSON"
        }
      ]
    },
    implementationDetails: [
      "Engineered an event-driven cart management module with zero external dependencies.",
      "Structured order payload schemas with cryptographic/timestamped order IDs (e.g., #SRM-ORD-8492).",
      "Configured Google Apps Script webhook bridge to append incoming orders into separate date-stamped spreadsheet tabs.",
      "Designed an accessible, high-contrast modal receipt that students can screenshot or show at the counter."
    ],
    challengesAndLearnings: [
      "Handling asynchronous webhook latency while maintaining an instant, reassuring UI confirmation for the student.",
      "Safeguarding against invalid cart quantities and duplicate submissions through client-side debouncing and state locking.",
      "Learned the power of hybrid architectures that use Google Workspace as an accessible administrative backend."
    ],
    previewVisual: "canteen"
  },
  {
    id: "smartcampus",
    title: "SmartCampus",
    category: "Application Development · Student Productivity",
    shortDescription:
      "A comprehensive student productivity platform concept uniting attendance tracking, course study resources, an interactive browser coding lab, and campus announcements in one interface.",
    status: "Architecture & Concept Phase (Planned)",
    isPlanned: true,
    technologies: [
      "React",
      "JavaScript",
      "Firebase / Firestore (Planned)",
      "JWT Authentication (Concept)",
      "Tailwind CSS",
      "Component Architecture"
    ],
    features: [
      "[Planned] Visual attendance tracking with threshold warnings (e.g., < 75% alerts)",
      "[Planned] Centralized course syllabus, lecture slides, and notes repository",
      "[Planned] Lightweight browser-based coding sandbox for introductory lab assignments",
      "[Planned] Canteen quick-order integration linking directly with campus food outlets",
      "[Planned] Unified student dashboard displaying timetables and academic deadlines"
    ],
    overview:
      "University students frequently navigate multiple fragmented tools: one portal for attendance, another for notes, messaging apps for announcements, and third-party tools for basic programming assignments. SmartCampus is an ambitious concept designed to consolidate daily student workflows into a single, cohesive, modern web portal.",
    motivation:
      "Engineering coursework requires balancing schedules, labs, and assignments. Having a centralized, distraction-free digital hub saves time and helps students stay ahead of academic deadlines and attendance thresholds.",
    proposedSolution:
      "Designing a modular React application architecture where individual campus utilities function as decoupled widgets within a customizable student dashboard. The system roadmap includes role-based authentication, cloud document storage, and lightweight in-browser code execution.",
    architecture: {
      type: "modular-flow",
      nodes: [
        {
          title: "1. Unified Dashboard Shell",
          description: "Modular React dashboard with customizable widgets for quick stats and urgent notices.",
          tech: "React 19, Tailwind CSS, Lucide Icons"
        },
        {
          title: "2. Identity & Access Guard",
          description: "Planned secure authentication framework separating student and faculty access levels.",
          tech: "Firebase Auth / JWT Tokens (Planned Architecture)"
        },
        {
          title: "3. Academic Service Modules",
          description: "Independent service layers for attendance calculation, resource indexing, and coding runner.",
          tech: "REST Endpoints, Web Workers, Monaco / Sandpack concepts"
        },
        {
          title: "4. Cloud Storage & Database",
          description: "Structured document storage storing subject syllabi, student records, and timetable slots.",
          tech: "Cloud Firestore / PostgreSQL Schema (Planned)"
        }
      ]
    },
    implementationDetails: [
      "Designed high-fidelity component wireframes and widget layout hierarchies.",
      "Drafted database entity relationship schemas for Students, Courses, Attendance Logs, and Study Materials.",
      "Prototyped the attendance percentage calculation logic with forecast simulations ('How many classes can I miss?').",
      "Identified security considerations for role-based student permission isolation."
    ],
    challengesAndLearnings: [
      "Balancing feature richness with simplicity: avoiding feature bloat while meeting practical daily student needs.",
      "Planning modular state boundaries in React to ensure independent widget updates don't trigger full-page re-renders.",
      "Gained significant experience in system design, requirements gathering, and software architecture planning."
    ],
    previewVisual: "campus"
  },
  {
    id: "habit-fitness-tracker",
    title: "Habit & Fitness Tracker",
    category: "Product Design · Web Application Concept",
    shortDescription:
      "A goal-oriented fitness and daily routine tracking concept designed with visual progress analytics, streak milestones, workout split logging, and customized habit formation.",
    status: "Product Design & Concept Phase (Planned)",
    isPlanned: true,
    technologies: [
      "React",
      "JavaScript",
      "UI/UX Design",
      "Chart.js / SVG Charts",
      "CSS Animations",
      "LocalStorage Persistence"
    ],
    features: [
      "[Planned] Daily habit checklist with visual streak counters and completion animations",
      "[Planned] Structured workout logging supporting sets, reps, and exercise categories",
      "[Planned] Consistency analytics with weekly & monthly activity heatmaps",
      "[Planned] Personalized routine builder for push/pull/legs and cardio splits",
      "[Planned] Hydration, sleep, and nutrition tracking concepts"
    ],
    overview:
      "Building lasting habits requires consistent feedback and friction-free tracking. The Habit & Fitness Tracker is a product design and web application concept that makes logging workouts and daily habits rewarding through elegant dark-mode visualization, micro-interactions, and visual progress streaks.",
    motivation:
      "Most fitness apps are overly bloated with paywalls, social feeds, and excessive ads. The motivation was to create a clean, purposeful, developer-focused habit tool with zero distraction and instant logging.",
    proposedSolution:
      "Crafted an intuitive UI/UX design featuring interactive streak rings, dark glassmorphic cards, and customizable daily checklist cards. The application prioritizes privacy and speed by leveraging client-side storage before cloud synchronization.",
    architecture: {
      type: "client-flow",
      nodes: [
        {
          title: "1. Habit Interaction UI",
          description: "Minimalist daily cards with tap-to-complete check triggers, micro-animations, and streak tags.",
          tech: "React Components, Tailwind, CSS Micro-interactions"
        },
        {
          title: "2. Workout Split Engine",
          description: "Categorized workout loggers allowing quick input for weights, sets, reps, and rest intervals.",
          tech: "Custom React State Hooks, Form Validation"
        },
        {
          title: "3. Analytics & Visualization",
          description: "Calculates weekly adherence ratios, volume load progression, and visual monthly heatmaps.",
          tech: "SVG Chart Renderers, Math Heuristics"
        },
        {
          title: "4. Local & Sync Storage",
          description: "Stores historical data offline with JSON export/import and optional cloud backup.",
          tech: "IndexedDB / localStorage, JSON Schema"
        }
      ]
    },
    implementationDetails: [
      "Created complete UI wireframes and interactive prototypes in Figma emphasizing visual hierarchy.",
      "Designed responsive SVG streak ring components inspired by modern biometric trackers.",
      "Formulated habit score algorithms that reward consistency rather than punishing occasional rest days.",
      "Implemented prototype state models in JavaScript for testing daily rollover mechanics."
    ],
    challengesAndLearnings: [
      "Designing an effortless mobile logging experience that requires fewer than two taps to log an activity.",
      "Visualizing multi-dimensional fitness metrics (frequency, volume, intensity) cleanly on small screens.",
      "Deepened UI/UX skills in information design, data visualization, and user engagement psychology."
    ],
    previewVisual: "fitness"
  }
];
