import React from 'react';
import type { ProjectCaseStudy } from '../../types';
import { ProjectPreviewArtwork } from './ProjectPreviewArtwork';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="bg-background rounded-xl border border-border overflow-hidden flex flex-col justify-between group transition-all duration-200 hover:border-border-strong hover:shadow-card">
      
      {/* Top Artwork & Visual Header */}
      <div className="p-4 sm:p-5 pb-0">
        <ProjectPreviewArtwork type={project.previewVisual} />
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Category & Status Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="font-mono text-[11px] text-text-primary font-medium uppercase tracking-wider">
              {project.category}
            </span>

            {project.isPlanned ? (
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">
                Planned Concept
              </span>
            ) : (
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                {project.status.includes('Hardware') ? 'IoT Prototype' : 'Functional Concept'}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="font-display font-bold text-xl text-text-primary mb-2.5 leading-snug transition-colors">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
            {project.shortDescription}
          </p>
        </div>

        {/* Bottom Section: Technologies & Action */}
        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-background-surface border border-border text-xs font-mono text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Case Study CTA Button */}
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-text-primary hover:text-accent-primary transition-colors group/btn"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover/btn:text-accent-primary transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
