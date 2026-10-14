import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Palette, Code2, Cpu, GraduationCap, MapPin, Check } from 'lucide-react';
import { personalConfig } from '../../data/config';

export const About: React.FC = () => {
  const focusPillars = [
    {
      number: "01",
      title: "Design",
      description: "Crafting clean interfaces with strong visual hierarchy and user-focused interactions.",
      icon: Palette,
      tags: ["Figma", "UI/UX Principles", "Design Systems"]
    },
    {
      number: "02",
      title: "Development",
      description: "Building responsive web applications and exploring full-stack engineering logic.",
      icon: Code2,
      tags: ["React", "JavaScript", "Node.js", "REST APIs"]
    },
    {
      number: "03",
      title: "Connected Systems",
      description: "Experimenting with ESP8266, ESP32, sensors, Wi-Fi connectivity, and IoT architectures.",
      icon: Cpu,
      tags: ["ESP8266 / ESP32", "Arduino C++", "Hardware Sensors"]
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-background-surface border-b border-border transition-colors duration-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          label="About"
          headline="Curious by nature. A builder by practice."
          subheadline="Combining design precision with engineering discipline to create functional, well-structured products."
        />

        {/* Asymmetric Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Main Column: Story & Perspectives */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed font-normal text-left">
            <p className="text-text-primary text-lg sm:text-xl font-medium leading-relaxed transition-colors">
              I am an engineering student at <strong className="text-text-primary underline decoration-accent-primary decoration-2 underline-offset-4 font-semibold">SRM Madurai</strong>, fascinated by the intersection of software systems, thoughtful interface design, and connected hardware.
            </p>

            <p>
              My approach to technology is practical and holistic. Rather than focusing solely on user interfaces or isolating backend logic, I enjoy working across the entire flow: sketching clean layouts in Figma, structuring accessible components in React, writing server workflows in Node.js, and interfacing physical microcontrollers with sensors and Wi-Fi telemetries.
            </p>

            <p>
              Whether engineering an ambient-sensing solar lighting prototype or drafting a campus web application, I care deeply about clean code, visual restraint, and building tools that solve genuine problems.
            </p>

            {/* Principles Row */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-border">
              {[
                "Strong visual hierarchy",
                "Clean, maintainable code",
                "Real-world problem solving",
                "Continuous hands-on learning"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-text-primary">
                  <div className="w-4 h-4 rounded-full bg-accent-subtle text-accent-primary flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Column: Clean Architectural Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-background-card rounded-2xl border border-border p-6 sm:p-8 shadow-card text-left transition-colors">
              
              {/* Profile Card Header */}
              <div className="pb-5 border-b border-border flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-text-primary transition-colors">
                    Hasan Ahmed
                  </h3>
                  <p className="font-mono text-xs text-text-muted mt-0.5">
                    Engineering Student & Developer
                  </p>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-background-surface border border-border text-text-primary font-medium">
                  Madurai, TN
                </span>
              </div>

              {/* Education & Academic Credentials */}
              <div className="py-5 space-y-3.5 border-b border-border text-xs font-mono">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-text-primary font-semibold block transition-colors">SRM Madurai</span>
                    <span className="text-text-secondary">{personalConfig.education.degree}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-text-muted shrink-0" />
                  <span className="text-text-secondary">Tamil Nadu, India</span>
                </div>
              </div>

              {/* Focus Areas Tags */}
              <div className="pt-5">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-2.5 font-medium">
                  Core Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {personalConfig.positioning.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-background-surface border border-border text-xs font-mono text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Three Compact Focus Areas with Thin Separators */}
        <div>
          <div className="mb-6 text-left">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted font-semibold">
              Core Technical Focus
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border divide-y md:divide-y-0 md:divide-x divide-border text-left">
            {focusPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.number} className="py-8 md:p-8 first:pl-0 last:pr-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-text-muted font-medium">
                        {pillar.number}
                      </span>
                      <Icon className="w-4 h-4 text-accent-primary" />
                    </div>

                    <h4 className="font-display font-bold text-lg text-text-primary mb-2 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {pillar.tags.map((t, idx) => (
                      <span key={idx} className="font-mono text-[11px] text-text-muted">
                        {idx > 0 && <span className="mr-1.5 text-border-strong">/</span>}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
