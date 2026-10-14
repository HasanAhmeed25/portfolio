import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', size = 'md' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const isSm = size === 'sm';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      className={`relative inline-flex items-center rounded-full border border-border p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 select-none cursor-pointer ${
        isDark ? 'bg-[#171B24]' : 'bg-[#E5E7EB]'
      } ${
        isSm ? 'w-[56px] h-[30px]' : 'w-[64px] h-[34px]'
      } ${className}`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {/* Background Track Icons */}
      <span className="w-full flex items-center justify-between px-1 pointer-events-none">
        <Sun className={`${isSm ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-amber-500 transition-opacity duration-200 ${isDark ? 'opacity-40' : 'opacity-0'}`} />
        <Moon className={`${isSm ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-blue-400 transition-opacity duration-200 ${isDark ? 'opacity-0' : 'opacity-40'}`} />
      </span>

      {/* Sliding Circular Thumb */}
      <span
        className={`absolute top-1 left-1 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out pointer-events-none ${
          isSm ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]'
        } ${
          isDark
            ? isSm
              ? 'translate-x-[26px] bg-[#7895FF] text-[#0B0D12]'
              : 'translate-x-[30px] bg-[#7895FF] text-[#0B0D12]'
            : 'translate-x-0 bg-white text-amber-500 border border-black/5 shadow-sm'
        }`}
      >
        {isDark ? (
          <Moon className={`${isSm ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-[#0B0D12]`} />
        ) : (
          <Sun className={`${isSm ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-amber-500`} />
        )}
      </span>
    </button>
  );
};
