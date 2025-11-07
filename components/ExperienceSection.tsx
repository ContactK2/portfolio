
import React from 'react';
import type { Experience } from '../types';

const experiences: Experience[] = [
    {
        role: 'Machine Learning Engineer Intern',
        company: '10code',
        date: 'Jun 2025 - Aug 2025',
        location: 'Seville, Spain',
        description: [
            'Engineered modular ETL pipelines leveraging Docker, Apache Airflow, MongoDB, and PostgreSQL.',
            'Developed web scraping modules using Selenium, Playwright, and Pyppeteer for robust data acquisition.',
            'Automated data validation and incremental scraping processes, enhancing data reliability and throughput.',
            'Implemented CI/CD pipelines integrated with Prometheus and Grafana for proactive monitoring.',
            'Optimized application performance and scaling strategies focused on concurrency and browser pooling.',
            'Documented comprehensive pipeline processes and contributed to internal knowledge bases.',
        ],
    },
    {
        role: 'Telecom Engineering Intern',
        company: 'SiriusXM',
        date: 'Jun 2024 - Aug 2024',
        location: 'Irving, TX',
        description: [
            'Supported integration of third-party services within large-scale telephony systems.',
            'Engaged in Agile sprint planning, daily stand-ups, and risk mitigation meetings.',
            'Documented data center operations and conducted thorough risk assessments.',
            'Utilized Linux/Unix environments and Git for version control and continuous integration workflows.',
        ],
    },
    {
        role: 'Resident Assistant',
        company: 'University of Texas at Arlington',
        date: 'Jan 2024 - May 2025',
        location: 'Arlington, TX',
        description: [
            'Planned and executed community-building events for 50+ residents.',
            'Acted as first responder in crisis scenarios, coordinating with security and counseling services.',
            'Developed conflict resolution, leadership, and interpersonal communication skills.',
        ],
    },
];

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
    return (
        <div className="relative pl-8 sm:pl-12 py-6 group">
             <div className="flex items-center mb-1">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-8 border-4 border-gray-900 z-10"></div>
                <h3 className="text-xl font-bold text-white">{experience.role}</h3>
                <span className="text-gray-400 ml-auto text-sm">{experience.date}</span>
             </div>
            <p className="text-blue-400 font-medium mb-2">{experience.company} <span className="text-gray-500 font-normal">| {experience.location}</span></p>
            <ul className="list-disc pl-5 space-y-2">
                {experience.description.map((point, index) => (
                    <li key={index} className="text-gray-300">{point}</li>
                ))}
            </ul>
        </div>
    );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 text-lg text-gray-400">My journey and contributions in the tech industry.</p>
        </div>
        <div className="relative border-l-2 border-gray-700">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
