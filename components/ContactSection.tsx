
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 border border-gray-700">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's Connect</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              I'm currently seeking new opportunities and am open to collaboration. If you have a project in mind or just want to say hello, feel free to reach out.
            </p>
            <div className="mt-8 flex justify-center items-center space-x-6">
              <a href="mailto:STOCKTON1229@GMAIL.COM" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-3xl">
                <i className="fas fa-envelope"></i>
                <span className="sr-only">Email</span>
              </a>
              <a href="https://github.com/ContactK2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-3xl">
                <i className="fab fa-github"></i>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/stockton-cortright-945b00272/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-3xl">
                <i className="fab fa-linkedin"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
