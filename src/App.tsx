import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './componets/Layout/themeContext';

// Import components
import Header from './componets/Layout/header';
import Hero from './componets/Sections/Hero';
import About from './componets/Sections/About';
import Resume from './componets/Sections/Resume';
import Skills from './componets/Sections/Skills';
import Projects from './componets/Sections/Project';
import Blog from './componets/Sections/Blog';
import Contact from './componets/Sections/Contact';
import Footer from './componets/Layout/footer';

// Scroll Progress Component (Fixed)
const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setScrollWidth(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
      <div 
        className="h-full bg-gradient-to-r from-accent to-accent-blue transition-all duration-300"
        style={{ width: `${scrollWidth}%` }}
      />
    </div>
  );
};

// Single-page application wrapper - MOVED OUTSIDE App component
const SinglePageLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
    <Footer />
  </div>
);

// Individual page wrapper components - MOVED OUTSIDE App component
const AboutPage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20">
      <div className="min-h-[calc(100vh-280px)]">
        <About />
      </div>
    </main>
    <Footer />
  </div>
);

const ResumePage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20">
      <div className="min-h-[calc(100vh-280px)]">
        <Resume />
      </div>
    </main>
    <Footer />
  </div>
);

const SkillsPage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20">
      <div className="min-h-[calc(100vh-280px)]">
        <Skills />
      </div>
    </main>
    <Footer />
  </div>
);

const ProjectsPage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20">
      <div className="min-h-[calc(100vh-280px)]">
        <Projects />
      </div>
    </main>
    <Footer />
  </div>
);

const BlogPage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20">
      <div className="min-h-[calc(100vh-280px)]">
        <Blog />
      </div>
    </main>
    <Footer />
  </div>
);

const ContactPage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow pt-20">
      <div className="min-h-[calc(100vh-280px)]">
        <Contact />
      </div>
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-primary text-text transition-colors duration-300">
          <Routes>
            {/* Single Page Portfolio Route */}
            <Route path="/" element={<SinglePageLayout />} />
            
            {/* Individual Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* 404 - Redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          {/* Fixed Scroll Progress Indicator - Only render on client */}
          {isClient && <ScrollProgress />}
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;