import React, { useState } from 'react';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCertificate, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaUsers,
  FaHandsHelping,
  FaChartLine,
  FaAward,
  FaBookOpen,
  FaLaptopCode,
  FaUniversity,
  FaChevronRight
} from 'react-icons/fa';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');

  const experiences = [
    // {
    //   id: 1,
    //   title: 'ICT Intern',
    //   company: 'University of Embu',
    //   location: 'Embu, Kenya',
    //   period: 'July 2025 - Present',
    //   description: [
    //     'Software & Hardware Management: Installed, updated, and troubleshoot software and hardware, including assistive technologies.',
    //     'Network & Security Management: Monitored network performance, implemented security protocols, and ensured compliance with IT policies.',
    //     'Inventory & Resource Management: Tracked and managed lab equipment and scheduled maintenance.',
    //     'Lab Administration & Maintenance: Oversaw daily lab operations, ensuring all systems were secure and functional.',
    //     'Data Analysis & Reporting: Used Excel and Power BI to generate lab usage reports and troubleshoot trends.'
    //   ],
    //   type: 'work',
    //   current: true
    // },
    {
      id: 2,
      title: 'Software Development Trainee',
      company: 'Teach2Give',
      location: 'Remote',
      period: 'September 2025 - Present',
      description: [
        'Completed comprehensive training in full-stack development',
        'Designed and developed RESTful APIs for web application integration',
        'Built responsive web applications and websites with focus on performance and user experience',
        'Collaborated on team projects using Git for version control and code collaboration',
        'Applied AI concepts to develop intelligent features in web applications'
      ],
      type: 'work',
      current: true
    },
    {
      id: 3,
      title: 'ICT Attachee',
      company: 'ICT Department KENYA MEDICAL TRAINING INSTITUTE(K.M.T.C) EMBU BRANCH',
      location: 'Embu, Kenya',
      period: 'May 2024 – September 2024',
      description: [
        'Provided comprehensive ICT support across all departments, ensuring smooth digital operations',
        'Conducted computer training for  staff and community members, students, improving digital literacy level',
        'Assisted in website content management and updates for school digital platforms',
        'Supported the digitization of school records and services, contributing to e-government initiatives',
        'Troubleshot hardware and software issues, providing timely technical support to county employees'
      ],
      type: 'work',
      current: false
    },
    {
      id: 4,
      title: 'Cyber Attendant',
      company: 'Palmshade Cyber',
      location: 'Embu, Kenya',
      period: 'May 2021 – August 2021',
      description: [
        'Designed promotional posters and marketing materials using graphic design software',
        'Assisted customers with printing, scanning, and document services',
        'Resolved technical issues related to computers, printers, and internet connectivity',
        'Delivered exceptional customer service and technical support',
        'Managed digital services and maintained cyber café equipment'
      ],
      type: 'work',
      current: false
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Degree Information Technology',
      institution: 'University of Embu',
      period: 'September 2021 - September 2025',
      description: [
        'Specialization in Software Development and Network Systems',
        'Key coursework: Web Development, Database Systems, Networking, AI/ML'
      ],
      type: 'education'
    },
    {
      id: 2,
      degree: 'Kenya Certificate of Secondary Education (K.C.S.E)',
      institution: 'Mkungi Boys High school',
      period: 'January 2016 – April 2021',
      description: [
        'Focus on Mathematics and Sciences',
        'Computer Studies specialization'
      ],
      type: 'education'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'Full Stack Developer',
      issuer: 'Teach2Give',
      year: '2025',
      type: 'certification'
    },
    {
      id: 2,
      name: 'Cisco Networking Basics',
      issuer: 'Cisco Networking Academy',
      year: '2024',
      type: 'certification'
    },
    {
      id: 3,
      name: 'Foundation to Artificial Intelligence',
      issuer: 'ICT Authority Kenya',
      year: 'ongoing',
      type: 'certification'
    },
    // {
    //   id: 4,
    //   name: 'Huawei Certified ICT Professional',
    //   issuer: 'Huawei',
    //   year: 'Ongoing',
    //   type: 'certification'
    // }
  ];

  const leadership = {
    roles: [
    //   'Male Representative – University of Embu Student Association (2024–2025)',
      'CIT Departmental Representative – University of Embu Student Association (2023–2024)',
      'Founder & Coordinator – Code and Tech Club, University of Embu',
      'Treasurer – University of Embu Christian Union IT Ministry (2023–2024)'
    ],
    community: [
      'Trained peers in multimedia skills (projection, posters, photography)',
      'Participated in Kangaru market cleanup activity organized by University of Embu student association',
      'Participated in Tree planting activity organized by University of Embu',
      'Participated in Embu town cleanup activity'
    ]
  };

  return (
    <section id="resume" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            My Resume
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-blue rounded-full mx-auto mb-8"></div>
          <p className="text-text-muted text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Professional Journey, Education, and Certifications
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('experience')}
            className={`group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg shadow-accent/20'
                : 'bg-gray-900/50 text-text-muted hover:text-accent hover:bg-gray-800 border border-gray-800 hover:border-accent/30'
            }`}
          >
            <FaBriefcase className="text-lg" />
            Experience
            <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20">
              {experiences.length}
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab('education')}
            className={`group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg shadow-accent/20'
                : 'bg-gray-900/50 text-text-muted hover:text-accent hover:bg-gray-800 border border-gray-800 hover:border-accent/30'
            }`}
          >
            <FaGraduationCap className="text-lg" />
            Education
            <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20">
              {education.length}
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab('certifications')}
            className={`group flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg shadow-accent/20'
                : 'bg-gray-900/50 text-text-muted hover:text-accent hover:bg-gray-800 border border-gray-800 hover:border-accent/30'
            }`}
          >
            <FaCertificate className="text-lg" />
            Certifications
            <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20">
              {certifications.length}
            </span>
          </button>
        </div>

        {/* Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="relative mb-20">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent-blue to-transparent"></div>
            
            <div className="space-y-12 relative">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full border-4 ${
                        exp.current 
                          ? 'border-accent bg-accent animate-pulse' 
                          : 'border-accent-blue bg-gray-900'
                      }`}></div>
                      {exp.current && (
                        <div className="absolute -top-1 -right-1">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                  } ml-16 md:ml-0`}>
                    <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                      {/* Current Badge */}
                      {exp.current && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full mb-6">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          CURRENT POSITION
                        </div>
                      )}
                      
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                          {exp.title}
                        </h3>
                        
                        <div className={`flex flex-wrap items-center gap-4 mb-4 ${
                          index % 2 === 0 && 'md:justify-end'
                        }`}>
                          <div className="flex items-center gap-2 text-accent font-medium">
                            <FaLaptopCode />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2 text-text-muted">
                            <FaCalendarAlt />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2 text-text-muted">
                            <FaMapMarkerAlt />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-text-muted group-hover:text-text transition-colors duration-300">
                            <FaChevronRight className="text-accent mt-1 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {activeTab === 'education' && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-3xl font-bold text-text">
                Education Background
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((edu) => (
                <div 
                  key={edu.id} 
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent-blue/20 rounded-xl flex items-center justify-center text-accent text-2xl">
                      <FaUniversity />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-4 text-text-muted text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <FaBookOpen />
                          {edu.institution}
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {edu.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-text-muted group-hover:text-text transition-colors duration-300">
                        <FaChevronRight className="text-accent mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {activeTab === 'certifications' && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl">
                <FaCertificate />
              </div>
              <h3 className="text-3xl font-bold text-text">
                Certifications & Training
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl mb-6">
                    <FaAward />
                  </div>
                  
                  <h4 className="text-lg font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {cert.name}
                  </h4>
                  
                  <div className="text-text-muted text-sm mb-3">
                    {cert.issuer}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-accent text-sm" />
                    <span className="text-accent font-bold text-sm">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leadership & Community */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl">
              <FaUsers />
            </div>
            <h3 className="text-3xl font-bold text-text">
              Leadership & Community Engagement
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Leadership */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-blue/20 rounded-xl flex items-center justify-center text-accent text-xl">
                  <FaChartLine />
                </div>
                <h4 className="text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                  Leadership Roles
                </h4>
              </div>

              <ul className="space-y-4">
                {leadership.roles.map((role, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-gray-900/30 rounded-xl border border-gray-800 group-hover:border-accent/20 transition-colors duration-300">
                    <FaChevronRight className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-text-muted group-hover:text-text transition-colors duration-300 leading-relaxed">
                      {role}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-blue/20 rounded-xl flex items-center justify-center text-accent text-xl">
                  <FaHandsHelping />
                </div>
                <h4 className="text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                  Community Engagement
                </h4>
              </div>

              <ul className="space-y-4">
                {leadership.community.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 bg-gray-900/30 rounded-xl border border-gray-800 group-hover:border-accent/20 transition-colors duration-300">
                    <FaChevronRight className="text-accent mt-1 flex-shrink-0" />
                    <span className="text-text-muted group-hover:text-text transition-colors duration-300 leading-relaxed">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h4 className="text-2xl font-bold text-accent mb-6">Skills Summary</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Full Stack Development', 'AI/ML Applications', 'Database Management', 'Network Administration', 'UI/UX Design', 'Project Management'].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-text">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-accent-blue/10 rounded-2xl p-8 border border-accent/20">
              <h4 className="text-2xl font-bold text-accent mb-4">Interests</h4>
              <div className="space-y-3">
                {['Open Source Contribution', 'Tech Community Building', 'Sustainable Tech', 'Education Technology', 'Digital Transformation'].map((interest, idx) => (
                  <div key={idx} className="text-text-muted">
                    • {interest}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Utility classes */}
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Resume;