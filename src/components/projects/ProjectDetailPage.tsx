import React, { useEffect } from 'react';
import type { ProjectCaseStudy } from '../../types';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { ProjectPreviewArtwork } from './ProjectPreviewArtwork';
import { GithubIcon } from '../common/Icons';
import { 
  ArrowLeft, 
  ExternalLink, 
  Check, 
  AlertCircle, 
  Wrench, 
  Lightbulb, 
  ShieldCheck, 
  ChevronRight,
  Layers
} from 'lucide-react';

interface ProjectDetailPageProps {
  project: ProjectCaseStudy;
  onBack: () => void;
  onSelectProject?: (projectId: string) => void;
  allProjects?: ProjectCaseStudy[];
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onSelectProject,
  allProjects = []
}) => {
  // Ensure page scrolls to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  // Find next project for bottom pagination
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1
    ? allProjects[currentIndex + 1]
    : allProjects[0];

  return (
    <article className="min-h-screen bg-background text-text-primary transition-colors duration-200">
      {/* Centered responsive container conforming to min(100% - 48px, 1200px) */}
      <div 
        className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 py-8 sm:py-12 lg:py-16 text-left"
        style={{ width: 'min(100% - 48px, 1200px)' }}
      >
        
        {/* Top Breadcrumb & Back Navigation */}
        <nav 
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-border"
        >
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent-primary transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <button 
              type="button" 
              onClick={onBack}
              className="hover:text-text-primary transition-colors cursor-pointer"
            >
              Projects
            </button>
            <span>/</span>
            <span className="text-accent-primary font-medium truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </div>
        </nav>

        {/* Project Metadata Block */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-primary">
            {project.category}
          </span>
          <span className="text-border">•</span>
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

        {/* Project Heading (Left-aligned, wrapping naturally without overflow) */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight leading-[1.14] mb-5 break-words">
          {project.title}
        </h1>

        {/* Project Description (Left-aligned with heading) */}
        <p className="text-text-secondary text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-8">
          {project.shortDescription}
        </p>

        {/* Action Buttons & Quick Links */}
        <div className="flex flex-wrap items-center gap-3.5 mb-10 pb-8 border-b border-border">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-primary text-accent-text font-mono text-xs font-medium hover:bg-accent-hover transition-colors shadow-subtle group"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-background-surface border border-border text-text-primary font-mono text-xs hover:border-accent-primary transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-text-secondary" />
              <span>View Repository</span>
            </a>
          )}

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-background-secondary border border-border text-text-secondary hover:text-text-primary font-mono text-xs transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </button>
        </div>

        {/* Dedicated Project Preview Artwork Container */}
        <div className="mb-14 rounded-xl border border-border overflow-hidden bg-background-secondary shadow-card">
          <ProjectPreviewArtwork type={project.previewVisual} />
        </div>

        {/* Executive Overview */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-4">
            Project Overview
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal max-w-4xl">
            {project.overview}
          </p>
        </section>

        {/* Motivation vs Proposed Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          <div className="p-6 sm:p-8 rounded-xl bg-background-surface border border-border shadow-subtle">
            <div className="flex items-center gap-2.5 text-text-primary font-mono text-xs uppercase tracking-wider mb-3.5 font-semibold">
              <Lightbulb className="w-4 h-4 text-accent-primary" />
              <span>The Problem & Motivation</span>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
              {project.motivation}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-background-surface border border-border shadow-subtle">
            <div className="flex items-center gap-2.5 text-text-primary font-mono text-xs uppercase tracking-wider mb-3.5 font-semibold">
              <Check className="w-4 h-4 text-accent-primary" />
              <span>The Architectural Solution</span>
            </div>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
              {project.proposedSolution}
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-4">
            <Layers className="w-4 h-4 text-accent-primary" />
            <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary">
              System Architecture Flow
            </h2>
          </div>
          <ArchitectureDiagram nodes={project.architecture.nodes} type={project.architecture.type} />
        </section>

        {/* Technologies Breakdown */}
        <section className="mb-14 p-6 sm:p-8 rounded-xl bg-background-surface border border-border shadow-subtle">
          <h2 className="font-display font-semibold text-lg sm:text-xl text-text-primary mb-4 flex items-center gap-2.5">
            <Wrench className="w-4 h-4 text-text-muted" />
            <span>Technologies & Engineering Tools</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-background-secondary border border-border font-mono text-xs text-text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features & Architectural Highlights */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-6">
            Key Features & System Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-background-surface border border-border shadow-subtle flex items-start gap-3 text-xs sm:text-sm font-mono text-text-secondary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Implementation Details */}
        <section className="mb-14 p-6 sm:p-8 rounded-xl bg-background-surface border border-border shadow-subtle">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-4">
            Technical Implementation Details
          </h2>
          <ul className="space-y-3.5">
            {project.implementationDetails.map((detail, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-text-secondary leading-relaxed font-normal"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2.5 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges & Lessons Learned */}
        <section className="mb-14 p-6 sm:p-8 rounded-xl bg-background-secondary border border-border">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-4 flex items-center gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <span>Engineering Challenges & Lessons Learned</span>
          </h2>
          <ul className="space-y-3">
            {project.challengesAndLearnings.map((challenge, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed font-normal"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Authenticity Disclaimer */}
        <div className="mb-14 p-4 rounded-xl bg-background-surface border border-border flex items-center gap-3 text-xs font-mono text-text-muted">
          <ShieldCheck className="w-4 h-4 text-text-muted shrink-0" />
          <span>
            {project.isPlanned
              ? 'This document outlines an architectural engineering specification currently in development.'
              : 'Verified personal engineering case study built by Hasan Ahmed at SRM Madurai.'}
          </span>
        </div>

        {/* Bottom Pagination & Navigation */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-background-surface border border-border text-xs font-mono text-text-primary hover:border-accent-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </button>

          {nextProject && onSelectProject && (
            <button
              type="button"
              onClick={() => onSelectProject(nextProject.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent-primary text-accent-text text-xs font-mono font-medium hover:bg-accent-hover transition-colors shadow-subtle cursor-pointer group"
            >
              <span>Next Project: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

      </div>
    </article>
  );
};
