
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const linkClasses = "relative block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-gray-700">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SC
          </span>
          <span className="self-center text-lg font-semibold whitespace-nowrap text-white hidden sm:inline">
            Stockton Cortright
          </span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClasses} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
