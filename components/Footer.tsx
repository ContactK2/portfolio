
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Stockton Cortright. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
            <a href="https://github.com/ContactK2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <i className="fab fa-github"></i>
                <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/stockton-cortright-945b00272/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <i className="fab fa-linkedin"></i>
                <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:STOCKTON1229@GMAIL.COM" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                <i className="fas fa-envelope"></i>
                <span className="sr-only">Email</span>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
