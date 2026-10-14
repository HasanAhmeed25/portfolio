import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { currentFocusData } from '../../data/focus';
import { ArrowUpRight } from 'lucide-react';

export const CurrentFocus: React.FC = () => {
  return (
    <section id="focus" className="py-24 sm:py-32 bg-background-surface border-b border-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          label="Active Horizons"
          headline="Currently exploring."
          subheadline="Specific engineering domains and product capabilities being actively deepened."
        />

        {/* Compact Two-Column Editorial Layout (Not identical rounded cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-border pt-10">
          {currentFocusData.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="flex items-start gap-5 pb-8 border-b border-border last:border-b-0 md:last:border-b-0 text-left"
              >
                {/* Minimalist Index */}
                <span className="font-mono text-sm font-semibold text-accent-primary shrink-0 mt-0.5">
                  /0{idx + 1}
                </span>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Active Topics Compact Inline List */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-text-muted">
                    {item.topics.map((topic, tIdx) => (
                      <span key={tIdx} className="inline-flex items-center gap-1 text-text-secondary">
                        <ArrowUpRight className="w-3 h-3 text-accent-primary shrink-0" />
                        <span>{topic}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
