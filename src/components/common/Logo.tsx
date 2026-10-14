import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = true,
  onClick
}) => {
  const isSm = size === 'sm';

  return (
    <a 
      href="#hero" 
      onClick={onClick}
      className={`group inline-flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 rounded-lg transition-opacity duration-150 hover:opacity-90 select-none ${className}`}
      aria-label="Hasan Ahmed — Home"
    >
      {/* Geometric Logo Icon Container */}
      <div 
        className={`${
          isSm ? 'w-8 h-8' : 'w-10 h-10'
        } bg-background-surface rounded-lg border border-border shadow-subtle flex items-center justify-center shrink-0 transition-colors duration-150 group-hover:border-border-strong`}
      >
        <svg 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-text-primary"
        >
          {/* Geometric H and A lines adapting to text-text-primary */}
          <path d="M8 7 L8 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          <path d="M24 7 L24 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          <path d="M8 16 L24 16" stroke="currentColor" strokeWidth="2" />
          {/* Geometric apex in Accent Primary */}
          <path d="M8 7 L16 2.5 L24 7" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
          <circle cx="16" cy="16" r="1.75" fill="var(--accent-primary)" />
        </svg>
      </div>

      {/* High-Contrast Wordmark Typography */}
      {showText && (
        <div className="flex flex-col text-left shrink-0 whitespace-nowrap">
          <span className="font-display font-semibold text-[17px] sm:text-[18px] text-text-primary tracking-tight leading-tight flex items-center gap-1.5 transition-colors">
            HASAN AHMED
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] font-medium text-text-muted tracking-wider uppercase leading-none mt-1 transition-colors">
            ENGINEERING & SOFTWARE
          </span>
        </div>
      )}
    </a>
  );
};
