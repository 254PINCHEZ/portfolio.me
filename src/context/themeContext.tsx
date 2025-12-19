import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Apply theme classes to document
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Update CSS custom properties
    if (theme === 'dark') {
      root.style.setProperty('--color-background', '#0a0a0a');
      root.style.setProperty('--color-surface', '#1a1a1a');
      root.style.setProperty('--color-text', '#f8fafc');
      root.style.setProperty('--color-text-muted', '#9ca3af');
      root.style.setProperty('--color-accent', '#f59e0b');
      root.style.setProperty('--color-accent-blue', '#3b82f6');
      root.style.setProperty('--color-border', '#374151');
    } else {
      root.style.setProperty('--color-background', '#f8fafc');
      root.style.setProperty('--color-surface', '#ffffff');
      root.style.setProperty('--color-text', '#0a0a0a');
      root.style.setProperty('--color-text-muted', '#6b7280');
      root.style.setProperty('--color-accent', '#f59e0b');
      root.style.setProperty('--color-accent-blue', '#3b82f6');
      root.style.setProperty('--color-border', '#e5e7eb');
    }

    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#f8fafc');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-primary text-text' 
          : 'bg-white text-gray-900'
      }`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Example of using Tailwind classes in a themed component
export const ThemedCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      rounded-xl p-6 transition-all duration-300
      ${theme === 'dark' 
        ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 text-gray-100' 
        : 'bg-white border border-gray-200 text-gray-900 shadow-md'
      }
      hover:shadow-xl hover:${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Example of a themed button
export const ThemedButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '' 
}) => {
  const { theme } = useTheme();
  
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: theme === 'dark' 
      ? 'bg-gradient-to-r from-accent to-accent-blue text-white hover:from-accent-dark hover:to-accent-blue-dark focus:ring-accent' 
      : 'bg-gradient-to-r from-accent to-accent-blue text-white hover:from-accent-light hover:to-accent-blue-light focus:ring-accent',
    
    secondary: theme === 'dark' 
      ? 'bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700 focus:ring-gray-600' 
      : 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 focus:ring-gray-400',
    
    outline: theme === 'dark' 
      ? 'border-2 border-accent text-accent bg-transparent hover:bg-accent/10 focus:ring-accent' 
      : 'border-2 border-accent text-accent bg-transparent hover:bg-accent/10 focus:ring-accent'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Helper hook for theme-aware styles
export const useThemeClasses = () => {
  const { theme } = useTheme();
  
  return {
    // Background classes
    bg: theme === 'dark' ? 'bg-primary' : 'bg-white',
    bgCard: theme === 'dark' ? 'bg-gray-900/50' : 'bg-white',
    bgMuted: theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100',
    
    // Text classes
    text: theme === 'dark' ? 'text-text' : 'text-gray-900',
    textMuted: theme === 'dark' ? 'text-text-muted' : 'text-gray-600',
    textAccent: theme === 'dark' ? 'text-accent' : 'text-accent',
    
    // Border classes
    border: theme === 'dark' ? 'border-gray-800' : 'border-gray-200',
    borderAccent: theme === 'dark' ? 'border-accent' : 'border-accent',
    
    // Shadow classes
    shadow: theme === 'dark' ? 'shadow-lg shadow-gray-900/30' : 'shadow-lg shadow-gray-200/50',
    shadowHover: theme === 'dark' ? 'hover:shadow-xl hover:shadow-gray-900/50' : 'hover:shadow-xl hover:shadow-gray-300/50',
    
    // Transition classes
    transition: 'transition-all duration-300',
    
    // Glass morphism effect
    glass: theme === 'dark' 
      ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800' 
      : 'bg-white/80 backdrop-blur-sm border border-gray-200'
  };
};