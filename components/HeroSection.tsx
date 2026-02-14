
import React, { useState, useEffect, useRef } from 'react';

const TITLES = [
  'Backend Engineer',
  'Machine Learning Engineer',
  'Full-Stack Developer',
];

const HeroSection: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const particles = useRef(
    Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
      size: `${2 + Math.random() * 4}px`,
    }))
  ).current;

  return (
    <section
      id="home"
      className="animated-gradient-bg pt-24 md:pt-32 relative overflow-hidden min-h-screen flex items-center"
    >
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}

      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Stockton Cortright
            </h1>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl h-10">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="typing-cursor">&nbsp;</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Backend Engineer with experience as a machine learning engineer intern, skilled in developing scalable ETL pipelines and web scraping modules. Seeking to leverage technical expertise to optimize system architecture and improve application efficiency.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold leading-6 text-gray-200 hover:text-blue-400 transition-colors duration-300 group"
              >
                Get in Touch{' '}
                <span
                  aria-hidden="true"
                  className="inline-block group-hover:translate-x-1 transition-transform duration-300"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
