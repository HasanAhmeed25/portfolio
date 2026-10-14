import React from 'react';

export const HeroFallback: React.FC = () => {
  return (
    <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] flex items-center justify-center p-6">
      {/* Minimalist Swiss Concentric Geometry */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Subtle Outer Circles */}
        <div className="absolute inset-0 rounded-full border border-border" />
        <div className="absolute inset-8 rounded-full border border-border border-dashed" />
        <div className="absolute inset-16 rounded-full border border-border" />

        {/* Central Clean Card */}
        <div className="relative z-10 bg-background-card p-6 rounded-xl border border-border shadow-card max-w-[260px] text-left">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
            <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
              Profile
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-primary" />
          </div>

          <div className="space-y-1 font-mono text-xs">
            <p className="font-semibold text-text-primary">Hasan Ahmed</p>
            <p className="text-text-secondary text-[11px]">SRM Madurai</p>
            <p className="text-text-muted text-[11px] pt-1">Web · UI/UX · IoT</p>
          </div>
        </div>

        {/* Orbiting blue accent dot */}
        <div className="absolute top-2 right-12 w-2.5 h-2.5 rounded-full bg-accent-primary" />
      </div>
    </div>
  );
};
