import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const About: React.FC = () => {
  const personalInfo = {
    name: 'Peter Githinji Mungai',
    title: 'Full Stack Developer | IT expert',
    location: 'Embu, Kenya, 60100',
    email: 'githinjipinchez001@gmail.com',
    phone: '+254725401081',
    secondaryPhone: '0104759255',
    summary: `Versatile  Information Technology graduate with a hybrid skill set across full-stack development, hands-on ICT support, and AI/ML applications. Combines end-to-end web development expertise with practical AI/ML project experience and robust technical troubleshooting abilities. Builds modern, scalable applications while supporting and maintaining digital infrastructure, automating workflows, and translating data into actionable insights.`,
  };

  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Years Experience', value: '4+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Certifications', value: '4' },
  ];

  const currentWork = [
    // {
    //   company: 'University of Embu',
    //   position: 'ICT Intern',
    //   period: 'July 2025 - Present'
    // },
    {
      company: 'Teach2Give',
      position: 'Software Development Trainee',
      period: 'Sep 2025 - Present'
    }
  ];

  const [hoverState, setHoverState] = React.useState({
    cvBtn: false,
    contactBtn: false,
    stats: Array(stats.length).fill(false),
  });

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-primary-light to-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-blue rounded-full mx-auto mb-6"></div>
          <p className="text-text-muted text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Personal Info & Stats */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Personal Info Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-accent mb-8 pb-4 border-b border-gray-800">
                Personal Information
              </h3>
              
              <div className="space-y-6">
                {[
                  { label: 'Full Name:', value: personalInfo.name },
                  { label: 'Title:', value: personalInfo.title },
                  { label: 'Location:', value: personalInfo.location, icon: FaMapMarkerAlt },
                  { label: 'Email:', value: personalInfo.email, icon: FaEnvelope, isLink: true },
                  { label: 'Phone:', value: personalInfo.phone, icon: FaPhone, isLink: true },
                  { label: 'Secondary:', value: personalInfo.secondaryPhone, icon: FaPhone, isLink: true }
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-4">
                      <span className="text-text-muted text-sm font-medium flex items-center gap-2">
                        {item.icon && <item.icon className="text-accent text-sm" />}
                        {item.label}
                      </span>
                    </div>
                    <div className="col-span-8">
                      {item.isLink ? (
                        <a 
                          href={item.label.includes('Email') ? `mailto:${item.value}` : `tel:${item.value}`}
                          className="text-text hover:text-accent transition-colors duration-300 font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-text font-medium">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800 transition-all duration-300 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 ${
                    hoverState.stats[index] ? 'transform -translate-y-1' : ''
                  }`}
                  onMouseEnter={() => setHoverState(prev => ({
                    ...prev, 
                    stats: prev.stats.map((val, i) => i === index ? true : val)
                  }))}
                  onMouseLeave={() => setHoverState(prev => ({
                    ...prev, 
                    stats: prev.stats.map((val, i) => i === index ? false : val)
                  }))}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Professional Summary */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Professional Summary */}
            <div>
              <h3 className="text-3xl font-bold text-text mb-8">
                Professional Summary
              </h3>
              
              <div className="space-y-6">
                <p className="text-text-muted text-lg leading-relaxed">
                  {personalInfo.summary}
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  Adaptable and solutions-focused, with a proven ability to deliver reliable, 
                  user-centered systems across both development and operational environments.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 mb-12">
              <a 
                href="/resume.pdf"
                className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  hoverState.cvBtn 
                    ? 'transform -translate-y-1 shadow-2xl shadow-accent/30' 
                    : 'shadow-lg'
                } bg-gradient-to-r from-accent to-accent-blue text-white hover:shadow-2xl hover:shadow-accent/30`}
                onMouseEnter={() => setHoverState(prev => ({...prev, cvBtn: true}))}
                onMouseLeave={() => setHoverState(prev => ({...prev, cvBtn: false}))}
                download="Peter_Muturi_Resume.pdf"
              >
                <FaDownload className="text-lg" />
                Download CV
              </a>
              
              <a 
                href="#contact"
                className={`group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-accent transition-all duration-300 ${
                  hoverState.contactBtn 
                    ? 'transform -translate-y-1 bg-accent text-white shadow-xl' 
                    : 'text-accent hover:bg-accent hover:text-white'
                }`}
                onMouseEnter={() => setHoverState(prev => ({...prev, contactBtn: true}))}
                onMouseLeave={() => setHoverState(prev => ({...prev, contactBtn: false}))}
              >
                Contact Me
              </a>
            </div>

            {/* Current Work */}
            <div className="bg-gradient-to-r from-gray-900/60 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-accent">
              <h4 className="text-2xl font-bold text-accent mb-8">
                Currently Working At
              </h4>
              
              <div className="space-y-8">
                {currentWork.map((work, index) => (
                  <div key={index} className="pb-6 border-b border-gray-800 last:border-0 last:pb-0">
                    <h5 className="text-xl font-bold text-text mb-2">
                      {work.company}
                    </h5>
                    <p className="text-text-muted font-medium">
                      {work.position} ({work.period})
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;