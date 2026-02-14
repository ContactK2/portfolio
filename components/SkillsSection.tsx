
import React from 'react';
import type { Skill } from '../types';
import { useScrollReveal } from '../hooks';

const languageSkills: Skill[] = [
  { name: 'Python', icon: <i className="fab fa-python text-yellow-400"></i> },
  { name: 'Java', icon: <i className="fab fa-java text-orange-500"></i> },
  { name: 'C++', icon: <i className="fas fa-file-code text-blue-400"></i> },
  { name: 'JavaScript', icon: <i className="fab fa-js-square text-yellow-400"></i> },
  { name: 'SQL', icon: <i className="fas fa-database text-cyan-400"></i> },
  { name: 'HTML/CSS', icon: <i className="fab fa-html5 text-orange-600"></i> },
];

const toolsSkills: Skill[] = [
  { name: 'Docker', icon: <i className="fab fa-docker text-blue-500"></i> },
  { name: 'Git', icon: <i className="fab fa-git-alt text-red-600"></i> },
  { name: 'Linux', icon: <i className="fab fa-linux text-yellow-300"></i> },
  { name: 'AWS', icon: <i className="fab fa-aws text-orange-500"></i> },
  { name: 'REST APIs', icon: <i className="fas fa-cogs text-gray-400"></i> },
  { name: 'Agile', icon: <i className="fas fa-sync-alt text-green-500"></i> },
  { name: 'CI/CD', icon: <i className="fas fa-infinity text-purple-400"></i> },
  { name: 'Selenium', icon: <i className="fas fa-robot text-green-400"></i> },
  { name: 'Prometheus', icon: <i className="fas fa-fire text-red-500"></i> },
  { name: 'Grafana', icon: <i className="fas fa-chart-line text-orange-400"></i> },
];

const osSkills: Skill[] = [
    { name: 'Linux', icon: <i className="fab fa-linux text-yellow-300"></i> },
    { name: 'Windows', icon: <i className="fab fa-windows text-blue-500"></i> },
    { name: 'MacOS', icon: <i className="fab fa-apple text-gray-300"></i> },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
        <div className="glass-card rounded-xl p-5 flex flex-col items-center justify-center text-center skill-float glow-hover transition-all duration-300 fade-up cursor-default">
            <div className="text-4xl mb-3">
                {skill.icon}
            </div>
            <p className="font-semibold text-white text-sm">{skill.name}</p>
        </div>
    );
};

const SkillsCategory: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white text-center mb-6">{title}</h3>
            <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 stagger-children">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
        </div>
    );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Technical Skills</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-400">A snapshot of the languages, tools, and technologies I work with.</p>
        </div>
        <SkillsCategory title="Programming Languages" skills={languageSkills} />
        <SkillsCategory title="Tools & Technologies" skills={toolsSkills} />
        <SkillsCategory title="Operating Systems" skills={osSkills} />
      </div>
    </section>
  );
};

export default SkillsSection;
