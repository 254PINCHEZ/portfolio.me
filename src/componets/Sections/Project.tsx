import React, { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaFilter, 
  FaCode, 
  FaServer, 
  FaRobot, 
//   FaShoppingCart, 
  FaCheckCircle, 
  FaClock, 
  FaCalendarAlt,
  FaLayerGroup,
  FaChartLine,
  FaCogs,
  FaPlus,
  FaMinus
} from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  github: string;
  liveUrl?: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  year: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const sampleProjects: Project[] = [
    {
      id: '1',
      title: 'TURAGA Vehicle Renting System',
      description: 'Full-stack vehicle rental platform with real-time booking management',
      longDescription: 'A comprehensive vehicle rental system featuring user authentication, payment integration, real-time booking management, and admin dashboard for fleet management. Built with modern technologies for scalability and performance.',
      technologies: ['React', 'Node.js', 'MSSQL', 'TypeScript', 'Express', 'JWT', 'Stripe'],
      features: [
        'User & Admin Authentication System',
        'Stripe Payment Integration',
        'Real-time Booking Management',
        'Admin Dashboard Analytics',
        'Vehicle Inventory Management',
        'Booking History & Reports'
      ],
      github: 'https://github.com/254PINCHEZ',
      liveUrl: '#',
      category: 'Full Stack',
      status: 'completed',
      year: '2025'
    },
    {
      id: '2',
      title: 'AI-Powered Expense Tracker',
      description: 'Intelligent expense tracking with predictive analytics',
      longDescription: 'Machine learning-powered expense tracker that analyzes spending patterns, predicts future expenses, and provides personalized financial insights and savings recommendations.',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Scikit-learn', 'Docker'],
      features: [
        'AI-Powered Expense Categorization',
        'Predictive Budget Forecasting',
        'Smart Savings Recommendations',
        'Data Visualization Dashboard',
        'Multi-platform Sync',
        'Financial Goal Tracking'
      ],
      github: '#',
      liveUrl: '#',
      category: 'AI/ML',
      status: 'in-progress',
      year: '2026'
    },
    {
      id: '3',
      title: 'University Management Portal',
      description: 'Comprehensive university resource and student management system',
      longDescription: 'Centralized platform for managing university resources, student services, faculty coordination, and administrative operations with real-time notifications and reporting.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind', 'Redux', 'AWS'],
      features: [
        'Resource Booking System',
        'Student Portal & Dashboard',
        'Faculty Management',
        'Automated Notifications',
        'Analytics Dashboard',
        'Document Management'
      ],
      github: '#',
      category: 'Web Application',
      status: 'in-progress',
      year: '2026'
    },
    {
      id: '4',
      title: 'Hotel management system',
      description: 'Real-time analytics and insights for hotel management system',
      longDescription: 'Advanced analytics dashboard providing real-time insights into sales performance, customer behavior, inventory management, and predictive analytics for e-commerce operations.',
      technologies: ['React', 'D3.js', 'Node.js', 'Redis', 'MySQL', 'Chart.js', 'WebSocket'],
      features: [
        'Real-time Sales Analytics',
        'Customer Behavior Tracking',
        'Inventory Optimization',
        'Predictive Sales Forecasting',
        'Custom Report Generation',
        'Multi-store Management'
      ],
      github: 'https://github.com/254PINCHEZ',
      liveUrl: '#',
      category: 'Analytics',
      status: 'completed',
      year: '2025'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaFilter />, count: sampleProjects.length },
    { id: 'Full Stack', name: 'Full Stack', icon: <FaCode />, count: sampleProjects.filter(p => p.category === 'Full Stack').length },
    { id: 'AI/ML', name: 'AI/ML', icon: <FaRobot />, count: sampleProjects.filter(p => p.category === 'AI/ML').length },
    { id: 'Web Application', name: 'Web Apps', icon: <FaServer />, count: sampleProjects.filter(p => p.category === 'Web Application').length },
    { id: 'Analytics', name: 'Analytics', icon: <FaChartLine />, count: sampleProjects.filter(p => p.category === 'Analytics').length }
  ];

  const filteredProjects = filter === 'all' 
    ? sampleProjects 
    : sampleProjects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'in-progress': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'planned': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <FaCheckCircle />;
      case 'in-progress': return <FaClock />;
      case 'planned': return <FaCalendarAlt />;
      default: return <FaCalendarAlt />;
    }
  };

  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-blue rounded-full mx-auto mb-8"></div>
          <p className="text-text-muted text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            A curated collection of my most impactful work, showcasing innovative solutions across 
            full-stack development, AI/ML, and web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg shadow-accent/20'
                  : 'bg-gray-900/50 text-text-muted hover:bg-gray-800 border border-gray-800 hover:border-accent/30'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
              <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                filter === category.id
                  ? 'bg-white/20'
                  : 'bg-gray-900'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map(project => {
            const isExpanded = expandedProject === project.id;
            
            return (
              <div 
                key={project.id}
                className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:shadow-2xl overflow-hidden ${
                  isExpanded 
                    ? 'border-accent/40 shadow-xl shadow-accent/10' 
                    : 'border-gray-800 hover:border-accent/30'
                }`}
                onClick={() => toggleProject(project.id)}
              >
                {/* Project Header */}
                <div className="p-8">
                  {/* Status & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 border ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                        {project.status === 'completed' ? 'Completed' : 
                         project.status === 'in-progress' ? 'In Progress' : 'Planned'}
                      </div>
                      <span className="text-text-muted text-sm font-medium">
                        {project.year} • {project.category}
                      </span>
                    </div>
                    
                    <button className="text-text-muted hover:text-accent transition-colors duration-300">
                      {isExpanded ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1.5 bg-gray-900 text-text-muted text-sm font-medium rounded-lg border border-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-3 py-1.5 bg-gradient-to-r from-accent/20 to-accent-blue/20 text-accent text-sm font-bold rounded-lg border border-accent/30">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-8 pb-8 border-t border-gray-800">
                    {/* Detailed Description */}
                    <div className="pt-8 mb-8">
                      <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                        <FaLayerGroup />
                        Project Overview
                      </h4>
                      <p className="text-text-muted text-lg leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-3">
                        <FaCogs />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                          <div 
                            key={index} 
                            className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-xl border border-gray-800"
                          >
                            <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                            <span className="text-text font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/btn flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 text-text font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-accent"
                      >
                        <FaGithub />
                        View Code
                        <FaExternalLinkAlt className="text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </a>
                      
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="group/btn flex-1 flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-accent to-accent-blue text-white font-bold rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                          <FaExternalLinkAlt className="text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Collapsed Footer */}
                {!isExpanded && (
                  <div className="px-8 pb-8">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-text font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm"
                      >
                        <FaGithub />
                        View Code
                      </a>
                      
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent-blue text-white font-medium rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 text-sm"
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              number: sampleProjects.length, 
              label: 'Projects Delivered', 
              icon: <FaLayerGroup />,
              gradient: 'from-green-500 to-emerald-500'
            },
            { 
              number: 15, 
              label: 'Technologies', 
              icon: <FaCode />,
              gradient: 'from-blue-500 to-cyan-500'
            },
            { 
              number: 100, 
              label: 'Client Satisfaction', 
              icon: <FaCheckCircle />,
              gradient: 'from-purple-500 to-pink-500'
            },
            { 
              number: 4, 
              label: 'Years Experience', 
              icon: <FaChartLine />,
              gradient: 'from-orange-500 to-red-500'
            },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white text-xl`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                  {stat.number}{stat.label === 'Client Satisfaction' ? '%' : '+'}
                </div>
              </div>
              <div className="text-text-muted text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-accent/10 to-accent-blue/10 rounded-3xl p-12 border border-accent/20 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Have an Exciting Project in Mind?
              </h3>
              <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Let's collaborate to bring your vision to life with cutting-edge technology 
                and innovative solutions.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
              >
                <FaCode />
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;