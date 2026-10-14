import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { journeyMilestones } from '../../data/journey';
import { Check } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 sm:py-28 bg-background-secondary border-b border-border transition-colors duration-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          label="Progression"
          headline="Always learning. Always building."
          subheadline="A steady path through engineering foundations, user interface craft, backend systems, and connected IoT hardware."
        />

        {/* Minimalist Vertical Timeline with Thin Lines and Numbered Markers */}
        <div className="relative max-w-3xl mx-auto pt-4">
          
          {/* Subtle Vertical Line */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-px bg-border" />

          <div className="space-y-12">
            {journeyMilestones.map((milestone, index) => {
              return (
                <div key={milestone.id} className="relative flex items-start gap-6 sm:gap-8">
                  
                  {/* Numbered Marker Circle */}
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-background-card border border-border shadow-subtle flex items-center justify-center text-text-primary font-mono text-xs sm:text-sm font-semibold shrink-0 z-10">
                    0{index + 1}
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 bg-background-card rounded-2xl border border-border p-6 sm:p-7 shadow-card hover:border-accent-primary transition-all duration-200 text-left">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-accent-primary font-medium">
                        {milestone.tag}
                      </span>
                      <span className="font-mono text-[11px] text-text-muted">
                        Milestone 0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                      {milestone.title}
                    </h3>

                    <p className="font-mono text-xs text-text-muted mb-3.5">
                      {milestone.roleOrFocus}
                    </p>

                    <p className="text-text-secondary text-sm leading-relaxed mb-5 font-normal">
                      {milestone.description}
                    </p>

                    {/* Key Learnings List */}
                    <div className="pt-4 border-t border-border space-y-2">
                      {milestone.keyLearnings.map((learning, lIdx) => (
                        <div key={lIdx} className="flex items-start gap-2 text-xs font-mono text-text-secondary">
                          <Check className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-text-muted">
            Milestones reflect verified academic foundations at SRM Madurai and genuine engineering experiments
          </p>
        </div>

      </div>
    </section>
  );
};
