import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectModal } from './ProjectModal';
import { projectsData } from '../../data/projects';
import type { ProjectCaseStudy } from '../../types';
import { ProjectPreviewArtwork } from './ProjectPreviewArtwork';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject?: (project: ProjectCaseStudy) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const [project1, project2, project3, project4] = projectsData;

  const handleOpenCaseStudy = (project: ProjectCaseStudy) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 sm:py-28 bg-background border-b border-border transition-colors duration-200 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <SectionHeader
          label="Featured Work"
          headline="Selected engineering projects."
          subheadline="A collection of practical projects spanning IoT embedded systems, web applications, and thoughtful user interface designs."
        />

        <div className="space-y-10 lg:space-y-12">
          
          {/* LAYOUT A: Featured Flagship Project (Project 01 — Solar Street Light System) */}
          {project1 && (
            <div className="bg-background-card rounded-2xl border border-border p-6 sm:p-10 shadow-card hover:border-accent-primary transition-all duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Metadata & Story */}
                <div className="lg:col-span-6 flex flex-col justify-between text-left">
                  <div>
                    {/* Number & Status */}
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border">
                      <span className="font-mono text-xs font-semibold text-accent-primary">
                        01 / FLAGSHIP PROJECT
                      </span>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                        IoT Prototype
                      </span>
                    </div>

                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-2">
                      {project1.category}
                    </span>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-4 transition-colors">
                      {project1.title}
                    </h3>

                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project1.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project1.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-background-secondary border border-border text-xs font-mono text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Case Study CTA */}
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleOpenCaseStudy(project1)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-accent-text bg-accent-primary hover:bg-accent-hover transition-colors shadow-subtle group cursor-pointer"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent-text transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Architectural Artwork Banner */}
                <div className="lg:col-span-6">
                  <ProjectPreviewArtwork type={project1.previewVisual} />
                </div>

              </div>
            </div>
          )}

          {/* LAYOUT B: Two-Column Split (Project 02 — SRM Canteen Web Application) */}
          {project2 && (
            <div 
              id="project-srm-canteen"
              className="bg-background-card rounded-2xl border border-border p-6 sm:p-10 shadow-card hover:border-accent-primary transition-all duration-200 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual Preview on Left */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <ProjectPreviewArtwork type={project2.previewVisual} />
                </div>

                {/* Content on Right */}
                <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border">
                      <span className="font-mono text-xs font-semibold text-text-primary">
                        02 / APPLICATION
                      </span>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-accent-subtle text-accent-primary border border-border font-medium">
                        Functional Concept
                      </span>
                    </div>

                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-2">
                      {project2.category}
                    </span>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-4 transition-colors">
                      {project2.title}
                    </h3>

                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project2.shortDescription}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project2.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-background-secondary border border-border text-xs font-mono text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleOpenCaseStudy(project2)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-accent-text bg-accent-primary hover:bg-accent-hover transition-colors shadow-subtle group cursor-pointer"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-accent-text transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* LAYOUT C: Two Side-by-Side Varied Column Cards (Projects 03 & 04) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Project 03: SmartCampus */}
            {project3 && (
              <div className="bg-background-card rounded-2xl border border-border p-6 sm:p-8 shadow-card flex flex-col justify-between hover:border-accent-primary transition-all duration-200 text-left">
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border">
                    <span className="font-mono text-xs font-semibold text-text-primary">
                      03 / PLATFORM
                    </span>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">
                      Planned Concept
                    </span>
                  </div>

                  <div className="mb-6">
                    <ProjectPreviewArtwork type={project3.previewVisual} />
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-1.5">
                    {project3.category}
                  </span>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-3 transition-colors">
                    {project3.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                    {project3.shortDescription}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project3.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-background-secondary border border-border text-xs font-mono text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenCaseStudy(project3)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-text-primary hover:text-accent-primary transition-colors group cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Project 04: Habit & Fitness Tracker */}
            {project4 && (
              <div className="bg-background-card rounded-2xl border border-border p-6 sm:p-8 shadow-card flex flex-col justify-between hover:border-accent-primary transition-all duration-200 text-left">
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-border">
                    <span className="font-mono text-xs font-semibold text-text-primary">
                      04 / PRODUCT DESIGN
                    </span>
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">
                      Design Phase
                    </span>
                  </div>

                  <div className="mb-6">
                    <ProjectPreviewArtwork type={project4.previewVisual} />
                  </div>

                  <span className="font-mono text-xs uppercase tracking-wider text-text-muted block mb-1.5">
                    {project4.category}
                  </span>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-3 transition-colors">
                    {project4.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                    {project4.shortDescription}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project4.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-background-secondary border border-border text-xs font-mono text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenCaseStudy(project4)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-text-primary hover:text-accent-primary transition-colors group cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Editorial Subnote */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-text-muted">
          <span>Authentic engineering prototypes and software solutions</span>
          <span>Verified student project portfolio</span>
        </div>

      </div>

      {/* Case Study Modal fallback */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
