
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Modular ETL Pipeline Engineering',
    description: 'Engineered and deployed modular ETL pipelines using Docker, Apache Airflow, MongoDB, and PostgreSQL to handle scalable data processing in alignment with Agile development practices.',
    imageUrl: 'https://picsum.photos/seed/etl-pipeline/600/400',
    tags: ['Python', 'Docker', 'Airflow', 'MongoDB', 'PostgreSQL'],
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Automated Web Scraping Modules',
    description: 'Developed robust web scraping modules with Selenium, Playwright, and Pyppeteer for automated data acquisition, validation, and incremental scraping.',
    imageUrl: 'https://picsum.photos/seed/webscraping/600/400',
    tags: ['Python', 'Selenium', 'Playwright', 'Data Validation'],
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'CI/CD Monitoring Implementation',
    description: 'Implemented CI/CD pipelines integrated with Prometheus and Grafana for proactive monitoring, ensuring continuous integration, and rapid deployment with a production-first mindset.',
    imageUrl: 'https://picsum.photos/seed/cicd/600/400',
    tags: ['CI/CD', 'Prometheus', 'Grafana', 'Docker', 'Agile'],
    githubUrl: '#',
  },
   {
    id: 4,
    title: 'Telephony Service Integration',
    description: 'Supported the integration of third-party services within large-scale telephony systems, ensuring continuous connectivity and operational reliability in line with Agile practices.',
    imageUrl: 'https://picsum.photos/seed/telecom/600/400',
    tags: ['Linux/Unix', 'Git', 'Agile', 'System Integration'],
    githubUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative flex flex-col rounded-lg bg-gray-800 shadow-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300">
      <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-blue-900/50 text-blue-300 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 pt-0 mt-auto flex justify-start space-x-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
          <i className="fab fa-github fa-lg"></i>
          <span className="sr-only">GitHub</span>
        </a>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <i className="fas fa-external-link-alt fa-lg"></i>
            <span className="sr-only">Live Demo</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-lg text-gray-400">A selection of my work and technical experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
