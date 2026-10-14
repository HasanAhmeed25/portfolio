import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Hero3DScene } from './Hero3DScene';
import { HeroFallback } from './HeroFallback';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 bg-background transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bold Headline & Editorial Story */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Status Badge */}
            <div className="inline-flex items-center gap-2 mb-6 self-start px-3 py-1.5 rounded-full bg-accent-subtle border border-border">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
                ENGINEERING STUDENT · SRM MADURAI
              </span>
            </div>

            {/* Bold Headline (Manrope) */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[56px] text-text-primary tracking-tight leading-[1.12] mb-6 transition-colors">
              Building thoughtful, robust digital experiences.
            </h1>

            {/* Concise Introduction (Inter) */}
            <p className="text-text-secondary text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-8 transition-colors">
              I'm Hasan Ahmed, an engineering student and developer focused on web applications, intuitive interface design, software engineering, and IoT systems.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-accent-text bg-accent-primary hover:bg-accent-hover shadow-subtle hover:shadow-card transition-all duration-150 group"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 text-accent-text transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium text-text-primary bg-background-card hover:bg-background-secondary border border-border shadow-subtle transition-all duration-150 group cursor-pointer"
              >
                <span>Download Resume</span>
                <ArrowDown className="w-4 h-4 text-text-muted transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* Focus Pillars Row */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-text-secondary">
              <span className="text-text-primary font-semibold uppercase tracking-wider">Focus:</span>
              <span className="px-2.5 py-1 rounded-md bg-background-secondary border border-border text-text-primary">
                Web Development
              </span>
              <span className="px-2.5 py-1 rounded-md bg-background-secondary border border-border text-text-primary">
                UI/UX Design
              </span>
              <span className="px-2.5 py-1 rounded-md bg-background-secondary border border-border text-text-primary">
                Software
              </span>
              <span className="px-2.5 py-1 rounded-md bg-background-secondary border border-border text-text-primary">
                IoT Systems
              </span>
            </div>

          </div>

          {/* Right Column: Premium Softly Lit 3D Developer Workspace */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full bg-background-secondary rounded-2xl border border-border p-2 sm:p-3 shadow-card hover:border-accent-primary transition-all duration-300">
              {hasWebGL ? (
                <Hero3DScene />
              ) : (
                <HeroFallback />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
