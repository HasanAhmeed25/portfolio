import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { 
  Layout, 
  Palette, 
  Server, 
  Cpu, 
  Check, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  deliverables: string[];
  tools: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Frontend & Web Development',
    headline: 'Modern, fast, accessible interfaces',
    description: 'Building responsive single-page applications and component architectures with clean state management, modular CSS, and optimal Core Web Vitals.',
    icon: Layout,
    deliverables: [
      'Responsive React & TypeScript apps',
      'Tailwind CSS design implementation',
      'Accessible semantic HTML & ARIA',
      'Performance and bundle optimization'
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3']
  },
  {
    id: 'ui-ux',
    number: '02',
    title: 'UI/UX & Interface Design',
    headline: 'Intuitive user flows & design systems',
    description: 'Transforming complex product logic into clear, aesthetic wireframes and high-fidelity prototypes that prioritize usability and brand polish.',
    icon: Palette,
    deliverables: [
      'Interactive prototypes & wireframes',
      'Modular design token systems',
      'User journey mapping & flows',
      'Responsive design across viewports'
    ],
    tools: ['Figma', 'Design Systems', 'Micro-Interactions', 'Prototyping']
  },
  {
    id: 'backend',
    number: '03',
    title: 'Backend & API Engineering',
    headline: 'Reliable server workflows & data pipeline',
    description: 'Developing RESTful APIs, form processing backends, and lightweight data persistence pipelines that connect seamlessly to client interfaces.',
    icon: Server,
    deliverables: [
      'Express.js & Node.js REST APIs',
      'JSON datastores & Google Sheets sync',
      'Form validation & order routing',
      'Client-server session persistence'
    ],
    tools: ['Node.js', 'Express', 'REST APIs', 'JSON', 'Sheets API']
  },
  {
    id: 'iot',
    number: '04',
    title: 'IoT & Connected Systems',
    headline: 'Physical computing & web telemetries',
    description: 'Bridging physical sensors and actuators with browser dashboards using Wi-Fi-enabled microcontrollers and real-time telemetry algorithms.',
    icon: Cpu,
    deliverables: [
      'ESP8266 & ESP32 firmware in C++',
      'Sensor calibration (LDR, PIR, ADC)',
      'Embedded Wi-Fi AP web dashboards',
      'PWM modulation & power efficiency'
    ],
    tools: ['ESP8266', 'ESP32', 'Arduino C++', 'Sensors', 'Wi-Fi AP']
  }
];

export const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      className="py-20 sm:py-28 bg-background-secondary border-b border-border transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          label="Services & Capabilities"
          headline="Engineering disciplines & solutions."
          subheadline="Combining design precision with software and hardware discipline to create functional, well-crafted digital products."
        />

        {/* 4-Column White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group bg-background-card rounded-xl border border-border p-6 sm:p-7 shadow-card hover:border-accent-primary hover:shadow-modal transition-all duration-200 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Top Bar: Blue Line Icon inside Soft Blue Surface + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent-subtle border border-border flex items-center justify-center text-accent-primary transition-transform group-hover:scale-105">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-text-muted">
                      /{service.number}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="font-display font-bold text-xl text-text-primary tracking-tight mb-2 group-hover:text-accent-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-mono text-xs text-accent-primary font-medium mb-4">
                    {service.headline}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-4 border-t border-border space-y-2.5 mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted font-semibold block mb-2">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-mono text-text-secondary">
                        <Check className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tools Pills */}
                <div>
                  <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                    {service.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-background-secondary border border-border text-[11px] font-mono text-text-muted"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-background-card border border-border shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-secondary">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-accent-primary shrink-0" />
            <span>High code quality, clean architecture, responsive performance, and complete documentation.</span>
          </div>

          <a 
            href="#contact"
            className="inline-flex items-center gap-1.5 text-accent-primary font-semibold hover:underline shrink-0"
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
