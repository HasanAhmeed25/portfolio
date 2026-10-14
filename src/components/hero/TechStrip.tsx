import React from 'react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Globe, 
  Database, 
  Terminal, 
  Palette, 
  GitBranch, 
  Server,
  Workflow
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  icon: React.FC<{ className?: string }>;
}

const technologies: TechItem[] = [
  { name: 'React', category: 'Frontend', icon: Code2 },
  { name: 'TypeScript', category: 'Language', icon: Terminal },
  { name: 'JavaScript (ES6+)', category: 'Language', icon: Code2 },
  { name: 'Node.js & Express', category: 'Backend', icon: Server },
  { name: 'Tailwind CSS', category: 'Styling', icon: Palette },
  { name: 'ESP8266 / ESP32', category: 'IoT Firmware', icon: Cpu },
  { name: 'C++ & Arduino', category: 'Embedded', icon: Terminal },
  { name: 'Python', category: 'Scripting', icon: Terminal },
  { name: 'REST APIs & JSON', category: 'Architecture', icon: Globe },
  { name: 'Figma', category: 'UI/UX Design', icon: Layers },
  { name: 'Git & GitHub', category: 'DevOps', icon: GitBranch },
  { name: 'Sheets API & Webhooks', category: 'Integrations', icon: Database },
];

export const TechStrip: React.FC = () => {
  return (
    <div className="w-full bg-background-secondary border-y border-border py-4 sm:py-5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Left Label */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Workflow className="w-4 h-4 text-accent-primary" />
          <span className="font-mono text-xs uppercase tracking-wider text-text-muted font-semibold">
            Core Toolkit
          </span>
          <span className="hidden md:inline-block w-px h-4 bg-border mx-1" />
        </div>

        {/* Scrolling / Wrapping Tech Strip */}
        <div className="w-full md:w-auto flex-1 overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background-card border border-border text-xs font-mono text-text-primary shadow-subtle hover:border-accent-primary transition-all duration-150 select-none"
                >
                  <Icon className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-[10px] text-text-muted font-normal hidden lg:inline">
                    · {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
