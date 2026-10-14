import React, { useState, useEffect } from 'react';
import { personalConfig } from '../../data/config';
import { X, Download, Copy, Check, Printer, GraduationCap, Cpu, Layers } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const summaryText = `HASAN AHMED
Engineering Student & Developer
Education: SRM Madurai — Bachelor of Engineering (Student)
Key Areas: Web Development, UI/UX Design, Full-Stack Engineering, IoT Systems
Technical Stack: React, JavaScript, Node.js, Express, MySQL, Firebase, ESP8266, ESP32, Arduino C++, Figma
Featured Projects:
1. Interconnected Solar Street Light System (ESP8266 + Web Dashboard)
2. SRM Canteen Web Application (Node.js + Express + Google Sheets Datastore)
3. SmartCampus (Student Productivity Concept)
4. Habit & Fitness Tracker (UI/UX & Web Concept)
LinkedIn: ${personalConfig.socials.linkedin}
Contact: ${personalConfig.socials.email}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-background-surface border border-border rounded-xl shadow-modal overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in zoom-in-95 duration-150 transition-colors">
        
        {/* Header with Actions */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-background-surface shrink-0">
          <div>
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
              Curriculum Vitae
            </span>
            <h3 className="font-display font-bold text-lg text-text-primary transition-colors">
              Hasan Ahmed — Professional Summary
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="p-2 rounded-lg bg-background-secondary border border-border text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Copy resume text to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="p-2 rounded-lg bg-background-secondary border border-border text-text-secondary hover:text-text-primary transition-colors hidden sm:flex items-center gap-1.5 text-xs font-mono"
              title="Print resume preview"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={personalConfig.resumeUrl}
              download="Hasan_Ahmed_Resume.pdf"
              className="px-3.5 py-2 rounded-lg bg-accent-primary text-accent-text font-mono text-xs font-medium hover:bg-accent-hover transition-colors flex items-center gap-1.5 shadow-subtle"
            >
              <Download className="w-3.5 h-3.5 text-accent-text" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-background-secondary text-text-muted hover:text-text-primary transition-colors ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-background-surface">
          
          {/* Header Profile Block */}
          <div className="pb-6 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="font-display font-extrabold text-3xl text-text-primary mb-1 transition-colors">
                HASAN AHMED
              </h1>
              <p className="font-mono text-sm text-accent-primary font-medium">
                Engineering Student & Developer
              </p>
              <p className="text-text-secondary text-xs font-normal mt-1 max-w-lg leading-relaxed">
                Engineering student at SRM Madurai interested in web development, intuitive interface design, software applications, and connected IoT systems.
              </p>
            </div>

            <div className="text-left sm:text-right font-mono text-xs text-text-muted space-y-1">
              <p>SRM Madurai, Tamil Nadu</p>
              <p className="text-text-primary font-medium">{personalConfig.socials.email}</p>
              <a
                href={personalConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline block"
              >
                LinkedIn Profile ↗
              </a>
              <p className="text-text-secondary">Web · UI/UX · Software · IoT</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
              <GraduationCap className="w-4 h-4 text-accent-primary" />
              <span>Education</span>
            </div>
            <div className="p-4 rounded-lg bg-background-secondary border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <h4 className="font-display font-bold text-base text-text-primary transition-colors">
                  SRM Madurai
                </h4>
                <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  {personalConfig.education.status}
                </span>
              </div>
              <p className="text-sm font-mono text-text-secondary mb-1">
                {personalConfig.education.degree}
              </p>
              <p className="text-xs text-text-muted font-normal">
                {personalConfig.education.details}
              </p>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
              <Cpu className="w-4 h-4 text-accent-primary" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-lg bg-background-secondary border border-border">
                <span className="text-text-primary font-semibold block mb-1">Frontend Development</span>
                <span className="text-text-muted">HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS</span>
              </div>
              <div className="p-3.5 rounded-lg bg-background-secondary border border-border">
                <span className="text-text-primary font-semibold block mb-1">Backend & APIs</span>
                <span className="text-text-muted">Node.js, Express.js, PHP, Python, RESTful Services</span>
              </div>
              <div className="p-3.5 rounded-lg bg-background-secondary border border-border">
                <span className="text-text-primary font-semibold block mb-1">Databases & Storage</span>
                <span className="text-text-muted">MySQL, Firebase, localStorage, Google Sheets API</span>
              </div>
              <div className="p-3.5 rounded-lg bg-background-secondary border border-border">
                <span className="text-text-primary font-semibold block mb-1">IoT & Embedded Systems</span>
                <span className="text-text-muted">ESP8266, ESP32, Arduino C++, MQTT, Blynk, Sensors</span>
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-3">
              <Layers className="w-4 h-4 text-accent-primary" />
              <span>Featured Engineering Projects</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              
              <div className="p-4 rounded-lg bg-background-secondary border border-border">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-text-primary font-bold text-sm">
                    Interconnected Solar Street Light System
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">IoT Prototype</span>
                </div>
                <p className="text-text-muted mb-2 font-normal leading-relaxed">
                  ESP8266-based connected solar lighting system with real-time battery voltage monitoring, ambient LDR detection, PIR motion-based brightness modulation, and embedded web server dashboard.
                </p>
                <span className="text-[10px] text-text-primary font-medium">Stack: ESP8266, Arduino C++, HTML, CSS, JS, Wi-Fi</span>
              </div>

              <div className="p-4 rounded-lg bg-background-secondary border border-border">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-text-primary font-bold text-sm">
                    SRM Canteen Web Application
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-accent-subtle text-accent-primary border border-accent-primary/20 font-medium">Full Stack Concept</span>
                </div>
                <p className="text-text-muted mb-2 font-normal leading-relaxed">
                  Digital food ordering platform with interactive menu filtering, real-time cart state, unique order ID generation, receipt modal, and webhook integration to Google Sheets.
                </p>
                <span className="text-[10px] text-text-primary font-medium">Stack: HTML, CSS, JavaScript, Node.js, Express, Sheets API</span>
              </div>

              <div className="p-4 rounded-lg bg-background-secondary border border-border">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-text-primary font-bold text-sm">
                    SmartCampus & Habit Tracker
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">Architecture & Design Phase</span>
                </div>
                <p className="text-text-muted mb-2 font-normal leading-relaxed">
                  Product design and software architectures for unified campus student tools and consistent habit/workout tracking.
                </p>
                <span className="text-[10px] text-text-primary font-medium">Stack: React, JavaScript, UI/UX, Charting</span>
              </div>

            </div>
          </div>

          {/* Verification & Colophon */}
          <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-2">
            <span>Verified Engineering Portfolio of Hasan Ahmed</span>
            <span className="text-text-primary">Updated {new Date().getFullYear()}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
