
import React from 'react';
import { useScrollReveal } from '../hooks';

const ContactSection: React.FC = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="contact" className="py-20 fade-up">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="gradient-border rounded-2xl p-[2px]">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Let's Connect
                </h2>
                <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                  I'm currently seeking new opportunities and am open to collaboration.
                  If you have a project in mind or just want to say hello, feel free to reach out.
                </p>
                <div className="mt-8 flex justify-center items-center space-x-8">
                  <a
                    href="mailto:STOCKTON1229@GMAIL.COM"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-3xl hover:scale-110 hover:-translate-y-1"
                  >
                    <i className="fas fa-envelope"></i>
                    <span className="sr-only">Email</span>
                  </a>
                  <a
                    href="https://github.com/ContactK2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-3xl hover:scale-110 hover:-translate-y-1"
                  >
                    <i className="fab fa-github"></i>
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/stockton-cortright-945b00272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-3xl hover:scale-110 hover:-translate-y-1"
                  >
                    <i className="fab fa-linkedin"></i>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
