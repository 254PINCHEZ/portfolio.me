import React from 'react';
import { useTheme } from '../Layout/themeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      className={`
        relative w-14 h-14 rounded-full flex items-center justify-center 
        transition-all duration-300 ease-out focus:outline-none
        ${theme === 'light' 
          ? 'bg-white text-gray-900 border border-gray-200 shadow-lg hover:shadow-xl' 
          : 'bg-gray-900 text-gray-100 border border-gray-800 shadow-xl hover:shadow-2xl'
        }
        ${isHovered ? 'scale-110' : 'scale-100'}
        ${isActive ? 'scale-95' : ''}
        hover:shadow-accent/20
        focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary
      `}
      aria-label="Toggle theme"
    >
      {/* Inner Glow Effect */}
      <div className={`
        absolute inset-0 rounded-full 
        transition-opacity duration-300 pointer-events-none
        ${theme === 'light' 
          ? 'bg-gradient-to-br from-white/30 to-transparent' 
          : 'bg-gradient-to-br from-gray-900/30 to-transparent'
        }
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} />
      
      {/* Icon with Smooth Rotation */}
      <div className={`
        transition-transform duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${isHovered ? 'rotate-12' : 'rotate-0'}
      `}>
        {theme === 'light' ? (
          <FaMoon className="text-xl" />
        ) : (
          <FaSun className="text-xl" />
        )}
      </div>
      
      {/* Pulsing Animation on Hover */}
      {isHovered && (
        <div className={`
          absolute inset-0 rounded-full border-2 animate-ping pointer-events-none
          ${theme === 'light' 
            ? 'border-accent/30' 
            : 'border-accent/50'
          }
        `} />
      )}
    </button>
  );
};

export default ThemeToggle;