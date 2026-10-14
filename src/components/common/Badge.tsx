import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'neutral' | 'accent' | 'success';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
  dot = false,
}) => {
  const variantStyles = {
    blue: 'bg-accent-subtle text-accent-primary border-accent-primary/20',
    neutral: 'bg-background-secondary text-text-secondary border-border',
    accent: 'bg-background-surface text-text-primary border-border',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  };

  const dotColors = {
    blue: 'bg-accent-primary',
    neutral: 'bg-text-muted',
    accent: 'bg-text-primary',
    success: 'bg-emerald-500',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono rounded-md border font-normal ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant]}`} />}
      {children}
    </span>
  );
};
