import React, { useState } from 'react';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaRobot, 
  FaNetworkWired, 
  FaPaintBrush,
  FaChartLine,
  FaUsers,
  FaToolbox,
  FaLanguage,
  FaStar,
  FaStarHalfAlt
} from 'react-icons/fa';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsByCategory = {
    programming: {
      icon: <FaCode />,
      title: 'Programming Languages',
      color: '#f59e0b',
      gradient: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Python', proficiency: 30, level: 'Begginer', years: '1' },
        { name: 'JavaScript', proficiency: 85, level: 'Advanced', years: '3' },
        { name: 'TypeScript', proficiency: 80, level: 'Advanced', years: '2' },
        { name: 'Java', proficiency: 55, level: 'Intermediate', years: '2' },
        { name: 'C', proficiency: 50, level: 'Intermediate', years: '1' }
      ]
    },
    web: {
      icon: <FaServer />,
      title: 'Web Development',
      color: '#3b82f6',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', proficiency: 85, level: 'Advanced', years: '2' },
        { name: 'Angular', proficiency: 20, level: 'Begginer', years: '1' },
        { name: 'Node.js', proficiency: 80, level: 'Advanced', years: '2' },
        { name: 'Express.js', proficiency: 80, level: 'Advanced', years: '2' },
        { name: 'Hono.js', proficiency: 70, level: 'Intermediate', years: '1' },
        { name: 'HTML5/CSS3', proficiency: 90, level: 'Expert', years: '3' }
      ]
    },
    databases: {
      icon: <FaDatabase />,
      title: 'Databases',
      color: '#10b981',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MSSQL', proficiency: 80, level: 'Advanced', years: '2' },
        { name: 'MySQL', proficiency: 85, level: 'Advanced', years: '2' },
        { name: 'PostgreSQL', proficiency: 30, level: 'Begginer', years: '1' },
        { name: 'MongoDB', proficiency: 30, level: 'Begginer', years: '1' }
      ]
    },
    ai: {
      icon: <FaRobot />,
      title: 'AI/ML & Data Analysis',
      color: '#ef4444',
      gradient: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Python for AI/ML', proficiency: 20, level: 'Begginer', years: '1' },
        { name: 'Predictive Modeling', proficiency: 40, level: 'Intermediate', years: '1' },
        { name: 'Forecasting Systems', proficiency: 40, level: 'Intermediate', years: '1' },
        { name: 'Data Analysis', proficiency: 30, level: 'Beginer', years: '1' }
      ]
    },
    networking: {
      icon: <FaNetworkWired />,
      title: 'Networking & Security',
      color: '#8b5cf6',
      gradient: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'Network Configuration', proficiency: 85, level: 'Advanced', years: '3' },
        { name: 'Cybersecurity', proficiency: 30, level: 'Begginer', years: '1' },
        { name: 'Cable Termination', proficiency: 90, level: 'Expert', years: '3' },
        { name: 'Troubleshooting', proficiency: 90, level: 'Expert', years: '3' }
      ]
    },
    design: {
      icon: <FaPaintBrush />,
      title: 'Multimedia & Design',
      color: '#ec4899',
      gradient: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Graphic Design', proficiency: 80, level: 'Advanced', years: '3' },
        { name: 'Video Production', proficiency: 55, level: 'Intermediate', years: '2' },
        { name: 'Photography', proficiency: 75, level: 'Advanced', years: '3' },
        { name: 'Digital Content Creation', proficiency: 60, level: 'Expert', years: '2.5' }
      ]
    }
  };

  const professionalSkills = [
    'Project Coordination',
    'Technical Training',
    'Stakeholder Communication',
    'Presentation Skills',
    'Team Leadership',
    'Problem Solving',
    'Agile Methodologies',
    'Documentation'
  ];

  const tools = [
    'GitHub', 'Microsoft Office', 'Microsoft 365', 'Visual Studio', 
    'Android Studio', 'NetBeans', 'Eclipse', 'Wireshark', 'Power BI',
    'Excel', 'Photoshop', 'Premiere Pro'
  ];

  const languages = [
    { name: 'English', level: 'Fluent', proficiency: 100 },
    { name: 'Kiswahili', level: 'Native', proficiency: 100 }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: '📊', count: Object.keys(skillsByCategory).length },
    { id: 'programming', name: 'Programming', icon: '💻', count: skillsByCategory.programming.skills.length },
    { id: 'web', name: 'Web Dev', icon: '🌐', count: skillsByCategory.web.skills.length },
    { id: 'databases', name: 'Databases', icon: '🗄️', count: skillsByCategory.databases.skills.length },
    { id: 'ai', name: 'AI/ML', icon: '🤖', count: skillsByCategory.ai.skills.length },
    { id: 'networking', name: 'Networking', icon: '🔧', count: skillsByCategory.networking.skills.length },
    { id: 'design', name: 'Design', icon: '🎨', count: skillsByCategory.design.skills.length }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? Object.entries(skillsByCategory).map(([key, value]) => ({ key, ...value }))
    : [{ key: activeCategory, ...skillsByCategory[activeCategory as keyof typeof skillsByCategory] }];

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 85) return 'text-green-400';
    if (proficiency >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const renderStars = (proficiency: number) => {
    const stars = [];
    const fullStars = Math.floor(proficiency / 20);
    const hasHalfStar = proficiency % 20 >= 10;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-accent" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-accent" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-700" />);
      }
    }
    return stars;
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-blue rounded-full mx-auto mb-8"></div>
          <p className="text-text-muted text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Comprehensive overview of my technical capabilities, professional skills, and tools proficiency
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg shadow-accent/20'
                  : 'bg-gray-900/50 text-text-muted hover:text-accent hover:bg-gray-800 border border-gray-800 hover:border-accent/30'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
              <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                activeCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-gray-900'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredSkills.map((category) => (
            <div 
              key={category.key}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-800">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white text-xl shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-text-muted text-sm font-medium">
                    {category.skills.length} skills • {category.skills.reduce((sum, skill) => sum + parseInt(skill.years), 0)}+ years experience
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-text font-bold">{skill.name}</span>
                        <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${
                          skill.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
                          skill.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-text-muted text-sm font-medium">
                          {skill.years} years
                        </span>
                        <span className={`text-sm font-bold ${getProficiencyColor(skill.proficiency)}`}>
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                      
                      {/* Stars Rating */}
                      <div className="flex justify-center gap-1 mt-3">
                        {renderStars(skill.proficiency)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Professional Skills */}
          <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl">
                <FaUsers />
              </div>
              <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                Professional Skills
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {professionalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 p-3 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-muted text-sm font-medium hover:text-text transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl">
                <FaToolbox />
              </div>
              <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                Tools & Technologies
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 p-3 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-accent/30 transition-colors duration-300 group/item"
                >
                  <div className="w-2 h-2 bg-accent rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                  <span className="text-text-muted text-sm font-medium group-hover/item:text-text transition-colors duration-300">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-blue rounded-xl flex items-center justify-center text-white text-xl">
                <FaLanguage />
              </div>
              <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                Languages
              </h3>
            </div>
            
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-text font-bold">{language.name}</span>
                    <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-bold rounded-full">
                      {language.level}
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-accent-blue transition-all duration-1000 ease-out"
                        style={{ width: `${language.proficiency}%` }}
                      />
                    </div>
                    
                    <div className="flex justify-between mt-2 text-xs text-text-muted font-medium">
                      <span>Basic</span>
                      <span>Conversational</span>
                      <span>Professional</span>
                      <span>Fluent</span>
                      <span>Native</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="relative bg-gradient-to-r from-accent/10 to-accent-blue/10 rounded-3xl p-12 border border-accent/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative">
            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-blue rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 shadow-2xl shadow-accent/30">
                <FaChartLine />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Skills At a Glance
              </h3>
              <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Combining technical expertise with professional soft skills to deliver comprehensive solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  {Object.values(skillsByCategory).reduce((sum, cat) => sum + cat.skills.length, 0)}+
                </div>
                <div className="text-text-muted font-medium">Technical Skills</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-blue mb-2">
                  {tools.length}+
                </div>
                <div className="text-text-muted font-medium">Tools Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">
                  {professionalSkills.length}+
                </div>
                <div className="text-text-muted font-medium">Professional Skills</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">
                  {languages.length}
                </div>
                <div className="text-text-muted font-medium">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Utility classes */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #f59e0b22 1px, transparent 1px),
                            linear-gradient(to bottom, #f59e0b22 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Skills;