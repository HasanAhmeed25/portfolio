export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalConfig {
  name: string;
  headline: string;
  supportingHeadline: string;
  shortBio: string;
  education: {
    institution: string;
    degree: string;
    details: string;
    status: string;
  };
  positioning: string[];
  availability: {
    isAvailable: boolean;
    statusText: string;
  };
  resumeUrl: string;
  socials: SocialLinks;
}

export type SkillCategory = 
  | 'Frontend' 
  | 'Backend' 
  | 'Databases & Integrations' 
  | 'IoT & Embedded Systems' 
  | 'Design & Tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  description: string;
  iconName: string;
  highlights?: string[];
}

export interface ArchitectureNode {
  title: string;
  description: string;
  tech: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  status: string;
  isPlanned: boolean;
  technologies: string[];
  features: string[];
  overview: string;
  motivation: string;
  proposedSolution: string;
  architecture: {
    type: 'iot-flow' | 'fullstack-flow' | 'modular-flow' | 'client-flow';
    nodes: ArchitectureNode[];
  };
  implementationDetails: string[];
  challengesAndLearnings: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewVisual: 'iot' | 'canteen' | 'campus' | 'fitness';
}

export interface Milestone {
  id: string;
  title: string;
  roleOrFocus: string;
  description: string;
  keyLearnings: string[];
  tag: string;
}

export interface CurrentFocusItem {
  id: string;
  title: string;
  description: string;
  topics: string[];
  icon: string;
}
