import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { ThemeToggle } from '../common/ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  isProjectPage?: boolean;
  onNavigate?: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isProjectPage = false, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      if (isProjectPage) return;

      const sections = ['hero', 'services', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProjectPage]);

  // Close mobile drawer automatically if viewport resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-header-bg border-b border-border transition-colors duration-200 ${
        isScrolled ? 'shadow-subtle' : ''
      }`}
      style={{ height: '72px' }}
    >
      <div className="w-full max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-4">
        
        {/* Left Side: Logo with icon, name, and subtitle */}
        <div className="flex items-center shrink-0 min-w-0">
          <Logo 
            size="md" 
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('#hero');
              }
            }} 
          />
        </div>

        {/* Center: Desktop Navigation Links (>= 1024px) */}
        <nav 
          aria-label="Main Navigation"
          className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 shrink min-w-0"
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = !isProjectPage && activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-2.5 py-1.5 xl:px-3 rounded-md text-[13px] xl:text-[14px] font-medium transition-colors duration-150 whitespace-nowrap ${
                  isActive
                    ? 'text-accent-primary font-semibold'
                    : 'text-text-nav hover:text-accent-primary hover:bg-background-secondary'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-[2px] bg-accent-primary rounded-full transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side: Theme Toggle Switch + Blue Let's Connect CTA (>= 1024px) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-3.5 shrink-0 min-w-0 justify-end">
          <ThemeToggle size="md" />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] xl:text-[14px] font-medium text-accent-text bg-accent-primary hover:bg-accent-hover shadow-subtle transition-all shrink-0 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent-text" />
          </a>
        </div>

        {/* Tablet & Mobile Right Bar (< 1024px) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-2.5 shrink-0">
          <ThemeToggle size="sm" />

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-accent-text bg-accent-primary hover:bg-accent-hover shadow-subtle transition-colors whitespace-nowrap"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-background-secondary border border-border text-text-primary hover:text-accent-primary hover:bg-border transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer shrink-0"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-header-bg px-6 pt-3 pb-6 shadow-modal animate-in slide-in-from-top-1 duration-150">
          <nav className="flex flex-col gap-1.5">
            
            {/* Dedicated Mobile Theme Switcher Row */}
            <div className="flex items-center justify-between p-3 mb-2 rounded-lg bg-background-secondary border border-border">
              <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
                Theme: <span className="text-accent-primary capitalize">{theme} Mode</span>
              </span>
              <ThemeToggle size="sm" />
            </div>

            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = !isProjectPage && activeSection === sectionId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-subtle text-accent-primary font-semibold'
                      : 'text-text-nav hover:text-text-primary hover:bg-background-secondary'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />}
                </a>
              );
            })}

            <div className="pt-3 mt-1 border-t border-border flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[14px] font-medium text-accent-text bg-accent-primary hover:bg-accent-hover shadow-subtle transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-accent-text" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
