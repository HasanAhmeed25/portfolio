# Hasan Ahmed — Editorial Engineering Portfolio

> **"Building thoughtful digital experiences."**  
> *Engineering student at SRM Madurai interested in web development, intuitive interface design, software applications, and connected IoT systems.*

A minimalist, responsive, high-performance personal portfolio website for **Hasan Ahmed**, designed with a Swiss graphic design philosophy, editorial typographic restraint, and a light-theme aesthetic.

---

## ✦ Design System & Aesthetic

- **Light Neutral Palette**:
  - Primary Background: `#FAFAF8` (Warm gallery white)
  - Secondary Background: `#F1F2EE` (Soft stone / paper gray)
  - Card Background: `#FFFFFF` (Pure crisp white)
  - Primary Text: `#202321` (Deep charcoal, high contrast)
  - Secondary Text: `#696F6A` (Refined neutral slate)
  - Muted Text: `#898E89` (Subtle metadata gray)
  - Primary Accent: `#315DEB` (Restrained Swiss electric blue)
  - Subtle Accent Background: `#EAF0FF` (Soft blue wash)
  - Border: `#E5E7E2` (Warm hairline border)
  - Footer Background: `#202321` (Charcoal footer — the single dark section)
  - Footer Text: `#F8F9F6`

- **Typography**:
  - Headings: **Plus Jakarta Sans** (clean, geometric, editorial)
  - Body: **Inter** (comfortable line-height and readable line-length)
  - Monospace: **JetBrains Mono** (used sparingly for technical metadata and labels)

- **Restrained Motion & 3D**:
  - Daytime studio-lit sculptural composition in Three.js / React Three Fiber: frosted glass sphere, brushed aluminum orbital ring, and a cobalt focal accent bead.
  - Gentle mouse parallax and slow rotation without neon glows, particle clutter, or animated grids.

---

## ✦ Key Sections & Architecture

1. **Navigation**:
   - Slim white sticky navigation bar (`#FAFAF8`/`#FFFFFF`) with subtle `#E5E7E2` bottom border.
   - Minimalist geometric `HA` monogram with `HASAN AHMED` wordmark.
   - Restrained `"Let's Connect ↗"` action and mobile menu drawer.

2. **Hero Section**:
   - Two-column editorial composition.
   - Eyebrow: `ENGINEERING STUDENT · DEVELOPER`
   - Headline: *"Building thoughtful digital experiences."*
   - Supporting copy and primary action buttons (*"Explore Projects ↗"*, *"Download Resume ↓"*).
   - Compact metadata row (`Web Development / UI/UX / Software / IoT Systems`).

3. **About Me**:
   - Headline: *"Curious by nature. A builder by practice."*
   - Main column: Authentic story linking SRM Madurai engineering foundations with interface design and IoT systems.
   - Secondary column: Architectural profile card with academic credentials.
   - Three focus areas with thin dividers: `01 — Design`, `02 — Development`, `03 — Connected Systems`.

4. **Technical Skills Index**:
   - Headline: *"Tools, technologies & interests."*
   - Clean grouped columns:
     - `FRONTEND`: HTML, CSS, JavaScript, React.
     - `BACKEND`: Node.js, Express.js, PHP, Python.
     - `DATA & INTEGRATION`: MySQL, Firebase, localStorage, REST APIs, Google Sheets API.
     - `IOT & EMBEDDED SYSTEMS`: ESP8266, ESP32, Arduino, MQTT, Blynk, sensors, Wi-Fi telemetry.
     - `DESIGN & TOOLS`: Figma, UI/UX principles, Git, GitHub, VS Code.

5. **Selected Projects (Asymmetric Editorial Grid)**:
   - **Project 01 — Interconnected Solar Street Light System**: Featured wide hero card with clean hardware & telemetry schematics.
   - **Project 02 — SRM Canteen Web Application**: Asymmetric split card with interactive food ordering mockup and Google Sheets sync.
   - **Project 03 — SmartCampus**: Modular campus dashboard concept (planned).
   - **Project 04 — Habit & Fitness Tracker**: Product design and routine tracking concept.

6. **Technical Case Studies Modal**:
   - Technical whitepaper format on a crisp white canvas.
   - Problem & motivation, solution, **interactive system architecture diagram**, implementation details, and engineering takeaways.

7. **Development Journey**:
   - Clean vertical milestone timeline with thin lines and numbered circular markers (`01`, `02`, `03`...) without fabricated dates.

8. **Currently Exploring**:
   - Compact two-column editorial list with active topic links (`Full-Stack Development`, `Better UI/UX`, `Practical Software Products`, `IoT & Automation`).

9. **Contact Section**:
   - Headline: *"Have something in mind?"*
   - Clean white form with visible labels, validation, and a Swiss blue submit button.
   - One-click copy email button and direct `mailto:` fallback.

10. **Charcoal Footer**:
    - Deep charcoal `#202321` footer with wordmark, colophon, and dynamic copyright year.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8 with manual chunk splitting
- **Styling**: Tailwind CSS v3 with light design tokens
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Icons**: Lucide React + custom SVG brand icons
- **Fonts**: Plus Jakarta Sans, Inter, JetBrains Mono

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
