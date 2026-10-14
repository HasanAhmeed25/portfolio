import React, { useEffect } from 'react';
import type { ProjectCaseStudy } from '../../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { ProjectPreviewArtwork } from './ProjectPreviewArtwork';
import { GithubIcon } from '../common/Icons';
import { X, ExternalLink, Check, AlertCircle, Wrench, Lightbulb, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Case Study Whitepaper Dialog */}
      <div className="relative w-full max-w-4xl bg-background-surface border border-border rounded-xl shadow-modal overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in zoom-in-95 duration-150 transition-colors">
        
        {/* Sticky Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-background-surface shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-text-primary font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-border">/</span>
            {project.isPlanned ? (
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">
                Planned Concept
              </span>
            ) : (
              <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                {project.status}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-background-secondary text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-background-surface">
          
          {/* Document Title Header */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-2">
              Technical Case Study
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-text-primary mb-3 transition-colors">
              {project.title}
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal max-w-3xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Clean Interface Diagram */}
          <div className="rounded-lg overflow-hidden border border-border">
            <ProjectPreviewArtwork type={project.previewVisual} />
          </div>

          {/* External Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary text-accent-text font-mono text-xs font-medium hover:bg-accent-hover transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Concept</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background-surface border border-border text-text-primary font-mono text-xs hover:border-accent-primary transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-text-secondary" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          )}

          {/* Motivation & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-lg bg-background-secondary border border-border">
              <div className="flex items-center gap-2 text-text-primary font-mono text-xs uppercase tracking-wider mb-2.5 font-semibold">
                <Lightbulb className="w-4 h-4 text-accent-primary" />
                <span>The Motivation & Problem</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed font-normal">
                {project.motivation}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background-secondary border border-border">
              <div className="flex items-center gap-2 text-text-primary font-mono text-xs uppercase tracking-wider mb-2.5 font-semibold">
                <Check className="w-4 h-4 text-accent-primary" />
                <span>The Proposed Solution</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed font-normal">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* Interactive System Architecture Diagram */}
          <div>
            <ArchitectureDiagram nodes={project.architecture.nodes} type={project.architecture.type} />
          </div>

          {/* Technologies Breakdown */}
          <div>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-text-muted" />
              <span>Technologies & Tools Applied</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-background-secondary border border-border font-mono text-xs text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-3">
              Key Features & Architectural Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-background-secondary border border-border flex items-start gap-2.5 text-xs font-mono text-text-secondary"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1 shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Highlights */}
          <div>
            <h3 className="font-display font-semibold text-lg text-text-primary mb-3">
              Technical Implementation Details
            </h3>
            <ul className="space-y-2.5">
              {project.implementationDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed font-normal"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Lessons Learned */}
          <div className="p-6 rounded-lg bg-background-secondary border border-border">
            <h3 className="font-display font-semibold text-lg text-text-primary mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Challenges Solved & Engineering Takeaways</span>
            </h3>
            <ul className="space-y-2.5">
              {project.challengesAndLearnings.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed font-normal"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transparency Disclaimer */}
          <div className="p-4 rounded-lg bg-background-secondary border border-border flex items-center gap-3 text-xs font-mono text-text-muted">
            <ShieldCheck className="w-4 h-4 text-text-muted shrink-0" />
            <span>
              {project.isPlanned
                ? 'This case study outlines an architectural specification currently in development.'
                : 'Verified engineering case study and prototype built by Hasan Ahmed.'}
            </span>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-background-surface flex justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-background-secondary hover:bg-border text-xs font-mono text-text-primary transition-colors border border-border"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
