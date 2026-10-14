import React from 'react';
import { SectionHeader } from '../common/SectionHeader';

interface SkillGroup {
  category: string;
  items: { name: string; note: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "FRONTEND",
    items: [
      { name: "React", note: "Component architecture, hooks, state" },
      { name: "JavaScript (ES6+)", note: "Asynchronous patterns, DOM APIs" },
      { name: "HTML5", note: "Semantic structure & accessibility" },
      { name: "CSS3 & Tailwind", note: "Responsive grid, flexbox, layout systems" },
    ]
  },
  {
    category: "BACKEND",
    items: [
      { name: "Node.js", note: "Server-side runtime & utilities" },
      { name: "Express.js", note: "RESTful routing, middleware, controllers" },
      { name: "Python", note: "Scripting & data handling" },
      { name: "PHP", note: "Server scripting & form processing" },
    ]
  },
  {
    category: "DATA & INTEGRATION",
    items: [
      { name: "MySQL", note: "Relational queries & schema modeling" },
      { name: "Firebase", note: "Firestore & real-time datastores" },
      { name: "REST APIs", note: "HTTP contracts & JSON integration" },
      { name: "Google Sheets API", note: "Lightweight spreadsheet datastore" },
      { name: "localStorage", note: "Client state persistence" },
    ]
  },
  {
    category: "IOT & EMBEDDED SYSTEMS",
    items: [
      { name: "ESP8266 & ESP32", note: "Wi-Fi microcontrollers & automation" },
      { name: "Arduino C++", note: "Embedded logic, I/O, interrupts" },
      { name: "Sensors & Actuators", note: "LDR, PIR, voltage dividers, relays" },
      { name: "MQTT & Blynk", note: "Telemetry messaging & dashboards" },
      { name: "Wi-Fi Telemetry", note: "AP/STA modes, on-chip HTTP servers" },
    ]
  },
  {
    category: "DESIGN & TOOLS",
    items: [
      { name: "Figma", note: "UI prototyping & wireframing" },
      { name: "UI/UX Principles", note: "Visual hierarchy, spacing, accessibility" },
      { name: "Git & GitHub", note: "Version control & repository workflows" },
      { name: "VS Code", note: "Primary development workspace" },
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-background-secondary border-b border-border transition-colors duration-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          label="Technical Index"
          headline="Tools, technologies & interests."
          subheadline="A structured index of languages, runtimes, hardware controllers, and design tools applied across practical projects."
        />

        {/* Clean Editorial Technical Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-background-card rounded-2xl border border-border p-6 sm:p-7 shadow-card hover:border-accent-primary hover:shadow-modal transition-all duration-200 flex flex-col justify-between text-left"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-border">
                  <span className="font-mono text-xs font-semibold tracking-wider text-text-primary">
                    {group.category}
                  </span>
                  <span className="font-mono text-[10px] text-text-muted">
                    {group.items.length} tools
                  </span>
                </div>

                {/* Items List */}
                <ul className="space-y-3.5">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex flex-col">
                      <span className="text-sm font-medium text-text-primary">
                        {item.name}
                      </span>
                      <span className="text-xs text-text-muted font-normal mt-0.5">
                        {item.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tag */}
              <div className="pt-5 mt-5 border-t border-border">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  Hands-on Application
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Subnote */}
        <div className="mt-12 pt-6 border-t border-border flex items-center justify-between text-xs font-mono text-text-muted">
          <span>Organized by practical project usage</span>
          <span>No arbitrary percentage bars</span>
        </div>

      </div>
    </section>
  );
};
