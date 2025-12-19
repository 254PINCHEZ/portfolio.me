import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../Layout/themeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About' },
    { id: 'resume', path: '/resume', label: 'Resume' },
    { id: 'skills', path: '/skills', label: 'Skills' },
    { id: 'projects', path: '/projects', label: 'Projects' },
    { id: 'blog', path: '/blog', label: 'Blog' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
          isScrolled 
            ? theme === 'dark' 
              ? 'bg-primary/95 shadow-2xl shadow-black/30' 
              : 'bg-white/95 shadow-lg shadow-gray-200/50'
            : theme === 'dark' 
              ? 'bg-primary' 
              : 'bg-white'
        } border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 no-underline">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent">
                PETER GITHINJI MUNGAI
                <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1"></span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex space-x-8">
                {navLinks.map(link => {
                  const active = isActive(link.path);
                  return (
                    <li key={link.id}>
                      <Link
                        to={link.path}
                        className={`relative px-1 py-2 text-base font-medium transition-colors duration-300 ${
                          active 
                            ? 'text-accent' 
                            : theme === 'dark' 
                              ? 'text-gray-300 hover:text-accent' 
                              : 'text-gray-700 hover:text-accent'
                        }`}
                      >
                        {link.label}
                        {active && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-6">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary ${
                  theme === 'dark' 
                    ? 'bg-gray-800' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <div 
                  className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${
                    theme === 'dark' 
                      ? 'left-7 bg-gray-700 text-yellow-300' 
                      : 'left-1 bg-white text-orange-500'
                  }`}
                >
                  {theme === 'dark' ? <FaMoon size={12} /> : <FaSun size={12} />}
                </div>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-400 hover:text-accent transition-colors p-2"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${theme === 'dark' ? 'bg-primary' : 'bg-white'} pt-20 px-6`}
      >
        <div className="flex flex-col space-y-6 py-8">
          {navLinks.map(link => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.id}
                to={link.path}
                className={`py-4 px-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                  active
                    ? theme === 'dark'
                      ? 'bg-accent/20 text-accent'
                      : 'bg-accent/10 text-accent'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-800'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          
          {/* Mobile Theme Toggle */}
          <div className="pt-8 mt-8 border-t border-gray-800 flex items-center justify-between">
            <span className={`text-base font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Switch theme:
            </span>
            <button
              onClick={toggleTheme}
              className={`relative w-16 h-10 rounded-full transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <div 
                className={`absolute top-2 w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg ${
                  theme === 'dark' 
                    ? 'left-8 bg-gray-700 text-yellow-300' 
                    : 'left-2 bg-white text-orange-500'
                }`}
              >
                {theme === 'dark' ? <FaMoon size={14} /> : <FaSun size={14} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;