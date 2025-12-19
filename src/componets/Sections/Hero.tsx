import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaDownload, 
  FaCode, 
  FaTools, 
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaLayerGroup
} from 'react-icons/fa';

const Hero: React.FC = () => {
  const [hoverState, setHoverState] = React.useState({
    hireMe: false,
    viewProjects: false,
    downloadCV: false,
    github: false,
    linkedin: false,
  });

  const stats = [
    { value: '10+', label: 'Projects Completed', icon: <FaLayerGroup /> },
    { value: '2+', label: 'Years Experience', icon: <FaStar /> },
    { value: '10+', label: 'Technologies', icon: <FaCode /> },
    { value: '100%', label: 'Client Satisfaction', icon: <FaCheckCircle /> }
  ];

  const floatingElements = [
    { icon: <FaCode />, top: '10%', left: '5%', delay: '0s', color: 'text-accent/10' },
    { icon: <FaTools />, top: '20%', right: '10%', delay: '1s', color: 'text-accent-blue/10' },
    { icon: <FaRocket />, bottom: '30%', left: '8%', delay: '2s', color: 'text-accent/10' },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-gray-900 overflow-hidden pt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <div 
            key={index}
            className={`absolute text-6xl md:text-8xl ${element.color} animate-float`}
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              animationDelay: element.delay,
            }}
          >
            {element.icon}
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/5 to-accent-blue/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/20 to-accent-blue/20 backdrop-blur-sm rounded-full border border-accent/30 mb-8 animate-pulse-slow">
              <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
              <span className="text-accent font-bold text-sm tracking-wider">
                FULL STACK DEVELOPER & IT EXPERT
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
              <span className="block">Peter Githinji</span>
              <span className="bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent">
                Mungai
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent-blue"></div>
              <h2 className="text-2xl md:text-3xl text-text-muted font-semibold">
                Building Digital Experiences
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-12 max-w-2xl">
              Versatile  Information Technology graduate specializing in full-stack development, 
              AI/ML integration, and robust IT infrastructure. Creating modern, scalable solutions that 
              deliver exceptional user experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-text-muted text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 mb-12">
              <Link 
                to="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30"
                onMouseEnter={() => setHoverState(prev => ({...prev, hireMe: true}))}
                onMouseLeave={() => setHoverState(prev => ({...prev, hireMe: false}))}
              >
                <div className="relative z-10 flex items-center gap-3">
                  Hire Me
                  <FaArrowRight className={`transition-transform duration-300 ${hoverState.hireMe ? 'translate-x-2' : ''}`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to="/projects"
                className="group px-8 py-4 bg-gray-900/50 backdrop-blur-sm border-2 border-accent text-accent font-bold rounded-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-3"
                onMouseEnter={() => setHoverState(prev => ({...prev, viewProjects: true}))}
                onMouseLeave={() => setHoverState(prev => ({...prev, viewProjects: false}))}
              >
                View Projects
                <FaRocket className={`transition-transform duration-300 ${hoverState.viewProjects ? 'translate-x-2' : ''}`} />
              </Link>
              
              <a 
                href="/resume.pdf"
                className="group px-8 py-4 bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 text-text font-bold rounded-xl hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-3"
                onMouseEnter={() => setHoverState(prev => ({...prev, downloadCV: true}))}
                onMouseLeave={() => setHoverState(prev => ({...prev, downloadCV: false}))}
                download="Peter_Githinji_Resume.pdf"
              >
                <FaDownload />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <span className="text-text-muted font-medium">Connect with me:</span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/254PINCHEZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                    hoverState.github 
                      ? 'bg-gray-900 text-accent transform -translate-y-1 shadow-lg' 
                      : 'bg-gray-900/50 text-text-muted border border-gray-800'
                  }`}
                  onMouseEnter={() => setHoverState(prev => ({...prev, github: true}))}
                  onMouseLeave={() => setHoverState(prev => ({...prev, github: false}))}
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/peter-githinji-a680462b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                    hoverState.linkedin 
                      ? 'bg-[#0077B5] text-white transform -translate-y-1 shadow-lg' 
                      : 'bg-gray-900/50 text-text-muted border border-gray-800'
                  }`}
                  onMouseEnter={() => setHoverState(prev => ({...prev, linkedin: true}))}
                  onMouseLeave={() => setHoverState(prev => ({...prev, linkedin: false}))}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Image Container */}
              <div className="relative">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-accent-blue rounded-3xl opacity-20 blur-xl"></div>
                
                {/* Image Frame */}
                <div className="relative bg-gradient-to-br from-accent/30 to-accent-blue/30 rounded-2xl p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Profile Image */}
                    <img 
                      src="/src/assets/myphotofor portfolio.jpeg" 
                      alt="Peter Githinji mungai - Full Stack Developer" 
                      className="w-full h-auto object-cover aspect-square rounded-2xl"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-2">
                    <FaCode className="text-accent" />
                    <span className="text-text text-sm font-bold">Full Stack</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-2">
                    <FaTools className="text-accent-blue" />
                    <span className="text-text text-sm font-bold">IT EXPERT</span>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 right-8 bg-gradient-to-r from-accent to-accent-blue text-white px-6 py-3 rounded-xl shadow-2xl shadow-accent/30">
                <div className="flex items-center gap-3">
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-sm font-medium">
                    Years
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-text-muted text-sm font-medium tracking-wider">SCROLL</span>
          <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent"></div>
        </div>
      </div>

      {/* Add animations to index.css */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-3d {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }
        
        .animate-float {
          animation: float-3d 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;