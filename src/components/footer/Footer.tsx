import React from 'react';
import { personalConfig } from '../../data/config';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-footer-bg text-footer-text pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Footer Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-display font-bold text-lg tracking-tight text-white">
                HASAN AHMED
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
            </div>
            <p className="font-display text-footer-muted text-sm font-normal">
              Engineering ideas into digital experiences.
            </p>
            <p className="font-mono text-xs text-footer-muted/80 mt-1">
              SRM Madurai · Web Development, UI/UX & IoT Systems
            </p>
          </div>

          {/* Compact Navigation */}
          <nav className="flex flex-wrap items-center gap-5 text-xs font-mono">
            {['Home', 'Services', 'About', 'Skills', 'Projects', 'Journey', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-footer-muted hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-footer-muted hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-footer-muted hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalConfig.socials.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-footer-muted hover:text-white transition-colors"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-footer-muted hover:text-white transition-colors ml-1"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-footer-muted gap-4">
          <p>
            &copy; {currentYear} Hasan Ahmed. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
