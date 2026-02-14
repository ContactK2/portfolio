
import React from 'react';
import type { Project } from '../types';
import { useScrollReveal } from '../hooks';

const projects: Project[] = [
  {
    id: 1,
    title: 'Floomba — Indoor Security Drone System',
    description: 'Designed and built an autonomous indoor security drone for smart homes that detects and tracks people in real time. Uses a Raspberry Pi with an OAK-D Lite stereo camera running a MobileNet-SSD neural network for on-device person detection. The drone autonomously hovers and adjusts yaw to track subjects via MAVLink commands, with captures uploaded to Cloudflare R2 and logged to a Neon PostgreSQL database. A web dashboard provides a live MJPEG video stream, real-time detection alerts via SSE, and searchable activity history.',
    imageUrl: 'https://picsum.photos/seed/floomba/600/400',
    tags: ['Python', 'Flask', 'Raspberry Pi', 'OAK-D Lite', 'MobileNet-SSD', 'MAVLink', 'Cloudflare R2', 'Neon PostgreSQL'],
    githubUrl: '#',
    liveUrl: 'https://floomba.org',
  },
  {
    id: 2,
    title: 'Scout — College Football Recruiting Analytics',
    description: 'Built a full-stack web application that aggregates and analyzes college football recruiting data from 247Sports, ESPN, and On3 into a unified analytics dashboard. Engineered automated web scrapers for player ratings, physical metrics, and commitment statuses with a deduplication and normalization pipeline. Implemented an AI-powered prospect evaluation system using Google Gemini and Ollama LLMs for trait scores and grade assessments. Features player search/filtering, multi-source rating comparisons, position-based physical benchmarking with z-score analysis, and team recruitment boards.',
    imageUrl: 'https://picsum.photos/seed/scout/600/400',
    tags: ['React', 'FastAPI', 'Python', 'SQLite', 'Playwright', 'Tailwind CSS', 'Gemini', 'Ollama'],
    githubUrl: '#',
    liveUrl: 'https://osirec.org',
  },
  {
    id: 3,
    title: 'RateMyApt — Apartment Review Platform',
    description: 'Built and deployed a full-stack apartment review platform enabling university students to share honest, anonymous housing experiences. Features property search with fuzzy matching, a five-pillar scoring system, document-based review verification, admin moderation workflows with email alerts, and a mobile-responsive dark-themed UI. Seeded with 22+ properties near UTA and prepared for beta launch targeting student renters.',
    imageUrl: 'https://picsum.photos/seed/ratemyapt/600/400',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL', 'Clerk', 'Cloudflare R2', 'Vercel', 'Sentry'],
    githubUrl: '#',
    liveUrl: 'https://ratemyapt.org',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative flex flex-col rounded-xl glass-card glow-hover shadow-lg overflow-hidden transition-all duration-300 fade-up">
      <div className="overflow-hidden relative">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-blue-500/10 backdrop-blur-sm text-blue-300 text-xs font-medium rounded-full border border-blue-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0 mt-auto flex justify-start space-x-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
          <i className="fab fa-github fa-lg"></i>
          <span className="sr-only">GitHub</span>
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
            <i className="fas fa-external-link-alt fa-lg"></i>
            <span className="sr-only">Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-400">A selection of my work and technical experience.</p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-children">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
