import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { TechStrip } from './components/hero/TechStrip';
import { Services } from './components/services/Services';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { ProjectDetailPage } from './components/projects/ProjectDetailPage';
import { Journey } from './components/journey/Journey';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { ResumeModal } from './components/resume/ResumeModal';
import { projectsData } from './data/projects';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Synchronize URL hash with project detail view
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/project/')) {
        const id = hash.replace('#/project/', '').trim();
        if (id) setActiveProjectId(id);
      } else if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '').trim();
        if (id) setActiveProjectId(id);
      } else if (hash.startsWith('#project-') && hash !== '#projects') {
        const id = hash.replace('#project-', '').trim();
        if (id) setActiveProjectId(id);
      } else if (hash === '#/project' || hash === '#project') {
        setActiveProjectId('srm-canteen');
      } else {
        setActiveProjectId(null);
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigateFromProject = (href: string) => {
    setActiveProjectId(null);
    window.location.hash = href;
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const selectedProjectData = activeProjectId
    ? projectsData.find((p) => p.id === activeProjectId) || projectsData[1]
    : null;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary selection:bg-accent-subtle selection:text-accent-primary flex flex-col font-sans transition-colors duration-200">
        
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent-primary text-accent-text font-mono text-xs rounded-md shadow-card"
        >
          Skip to main content
        </a>

        {/* Slim White Sticky Navigation Header */}
        <Navbar 
          isProjectPage={Boolean(activeProjectId)} 
          onNavigate={handleNavigateFromProject} 
        />

        {/* Main Content Flow: Project Detail Page OR Full Portfolio */}
        {selectedProjectData ? (
          <main id="main-content" className="flex-1">
            <ProjectDetailPage
              project={selectedProjectData}
              onBack={() => {
                setActiveProjectId(null);
                window.location.hash = '#projects';
              }}
              onSelectProject={(id) => {
                setActiveProjectId(id);
                window.location.hash = `#/project/${id}`;
              }}
              allProjects={projectsData}
            />
          </main>
        ) : (
          <main id="main-content" className="flex-1">
            {/* 1. Spacious Hero Section with 3D Workspace */}
            <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

            {/* 2. Minimal Technology Strip */}
            <TechStrip />

            {/* 3. Services & Capabilities (White Cards, Fine Borders, Blue Line Icons) */}
            <Services />

            {/* 4. About Me (Asymmetric Editorial Magazine Layout) */}
            <About />

            {/* 5. Technical Skills (Structured Interactive Index Grid) */}
            <Skills />

            {/* 6. Selected Projects (Featured Work with Interactive Previews & Links) */}
            <Projects 
              onSelectProject={(project) => {
                setActiveProjectId(project.id);
                window.location.hash = `#/project/${project.id}`;
              }} 
            />

            {/* 7. Progression Journey (Numbered Vertical Timeline) */}
            <Journey />

            {/* 8. Contact Section (Direct Consultation & Form) */}
            <Contact onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          </main>
        )}

        {/* Cohesive Footer */}
        <Footer />

        {/* Recruiter Resume Summary & Download Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
