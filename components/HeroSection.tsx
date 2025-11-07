
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-24 md:pt-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2563eb] to-[#3b82f6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
            </div>
            <div className="mx-auto max-w-3xl py-16 sm:py-24 lg:py-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Stockton Cortright</h1>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-blue-400 sm:text-3xl">Backend & Machine Learning Engineer</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Backend Engineer with experience as a machine learning engineer intern, skilled in developing scalable ETL pipelines and web scraping modules. Seeking to leverage technical expertise to optimize system architecture and improve application efficiency.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#projects" className="rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-300">
                            View My Work
                        </a>
                        <a href="#contact" className="text-sm font-semibold leading-6 text-gray-200 hover:text-blue-400 transition-colors duration-300">
                            Get in Touch <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
