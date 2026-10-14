import React from 'react';

interface SectionHeaderProps {
  label: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  headline,
  subheadline,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {/* Category / Section tag */}
      <div className={`inline-flex items-center gap-2 mb-3.5 px-2.5 py-1 rounded-md bg-background-secondary border border-border ${isCenter ? 'justify-center' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
        <span className="font-mono text-xs uppercase tracking-wider text-text-secondary font-semibold">
          {label}
        </span>
      </div>

      {/* Main Editorial Headline */}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-text-primary tracking-tight leading-[1.18] mb-3 transition-colors">
        {headline}
      </h2>

      {/* Subtitle */}
      {subheadline && (
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal transition-colors">
          {subheadline}
        </p>
      )}
    </div>
  );
};
