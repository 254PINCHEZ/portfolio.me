import React from 'react';
import { FaHeart, FaArrowUp, FaCopyright, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary border-t border-gray-800 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column - About & Social */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-accent tracking-tight">
              Peter Githinji Mungai
            </h3>
            <p className="text-text-muted text-lg leading-relaxed max-w-lg font-light">
              Full Stack Developer & IT Expert passionate about building innovative web solutions, software
              AI integration, and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://github.com/254PINCHEZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20 border border-gray-800 hover:border-accent"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/peter-githinji-a680462b8" 
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0077b5] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0077b5]/20 border border-gray-800 hover:border-[#0077b5]"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="mailto:githinjipinchez001@gmail.com" 
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#ea4335] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#ea4335]/20 border border-gray-800 hover:border-[#ea4335]"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Column - Split into 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Contact Section */}
            <div>
              <h4 className="text-xl font-bold text-accent mb-6 tracking-tight">Get In Touch</h4>
              <div className="space-y-5">
                <a 
                  href="mailto:githinjipinchez001@gmail.com" 
                  className="group flex items-center space-x-4 text-text-muted hover:text-accent transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <FaEnvelope className="text-accent text-sm" />
                  </div>
                  <span className="text-base font-medium">githinjipinchez001@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+254725401081" 
                  className="group flex items-center space-x-4 text-text-muted hover:text-accent transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <FaPhone className="text-accent text-sm" />
                  </div>
                  <span className="text-base font-medium">+254 725401081</span>
                </a>
                
                <div className="group flex items-center space-x-4 text-text-muted">
                  <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-accent text-sm" />
                  </div>
                  <span className="text-base font-medium">Embu, Kenya</span>
                </div>
              </div>
            </div>

            {/* Availability Section */}
            <div>
              <h4 className="text-xl font-bold text-accent mb-6 tracking-tight">Availability</h4>
              <div className="space-y-3">
                {['Remote Projects', 'On-site Work', 'Freelance', 'Full-time', 'Contract', 'Open to Collaborate'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <FaCheckCircle className="text-accent flex-shrink-0" />
                    <span className="text-text text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-text-muted text-base flex flex-wrap items-center justify-center gap-4 font-medium">
            <div className="flex items-center space-x-2">
              <FaCopyright className="text-sm" />
              <span>{currentYear} Peter Githinji Mungai. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>•</span>
              <span className="flex items-center space-x-2">
                Made with <FaHeart className="text-red-500 mx-1" /> in Kenya
              </span>
            </div>
          </div>

          <button 
            onClick={scrollToTop} 
            className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent/90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-lg" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;