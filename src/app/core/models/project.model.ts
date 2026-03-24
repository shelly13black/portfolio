export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  type: 'fullstack' | 'frontend' | 'backend';
}