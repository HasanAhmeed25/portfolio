/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-primary)',
        'background-secondary': 'var(--bg-secondary)',
        'background-surface': 'var(--bg-surface)',
        'background-elevated': 'var(--bg-elevated)',
        'background-card': 'var(--bg-surface)',
        
        primary: 'var(--text-primary)',
        'text-primary': 'var(--text-primary)',
        
        secondary: 'var(--text-secondary)',
        'text-secondary': 'var(--text-secondary)',
        
        muted: 'var(--text-muted)',
        'text-muted': 'var(--text-muted)',
        
        nav: 'var(--text-nav)',
        'text-nav': 'var(--text-nav)',
        
        'accent-primary': 'var(--accent-primary)',
        'accent-hover': 'var(--accent-hover)',
        'accent-text': 'var(--accent-text)',
        'accent-subtle': 'var(--accent-subtle)',
        
        border: 'var(--border-color)',
        'border-color': 'var(--border-color)',
        'border-strong': 'var(--border-strong)',
        
        'header-bg': 'var(--header-bg)',
        'input-bg': 'var(--input-bg)',
        'footer-bg': 'var(--footer-bg)',
        'footer-text': 'var(--footer-text)',
        'footer-muted': 'var(--footer-muted)',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'card': 'var(--shadow-card)',
        'modal': 'var(--shadow-modal)',
      },
      borderRadius: {
        'sm': '6px',
        'DEFAULT': '8px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
}
