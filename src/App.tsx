import React from 'react';
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

const App: React.FC = () => {
  // Single-page application wrapper
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

  // Individual page wrappers
  const createPageWrapper = (Component: React.FC) => () => (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <div className="min-h-[calc(100vh-280px)]">
          <Component />
        </div>
      </main>
      <Footer />
    </div>
  );

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-primary text-text transition-colors duration-300">
          <Routes>
            {/* Single Page Portfolio Route */}
            <Route path="/" element={<SinglePageLayout />} />
            
            {/* Individual Pages */}
            <Route path="/about" element={createPageWrapper(About)()} />
            <Route path="/resume" element={createPageWrapper(Resume)()} />
            <Route path="/skills" element={createPageWrapper(Skills)()} />
            <Route path="/projects" element={createPageWrapper(Projects)()} />
            <Route path="/blog" element={createPageWrapper(Blog)()} />
            <Route path="/contact" element={createPageWrapper(Contact)()} />
            
            {/* 404 - Redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-blue z-50">
            <div 
              className="h-full bg-gradient-to-r from-accent to-accent-blue transition-all duration-300"
              style={{
                width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`
              }}
            />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;