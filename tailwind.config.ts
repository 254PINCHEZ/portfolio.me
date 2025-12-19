import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        primary: '#0a0a0a',
        'primary-light': '#1a1a1a',
        'primary-dark': '#000000',
        
        text: '#f8fafc',
        'text-muted': '#6b7280',
        'text-dark': '#0a0a0a',
        
        accent: '#f59e0b',
        'accent-light': '#fbbf24',
        'accent-dark': '#d97706',
        
        'accent-blue': '#3b82f6',
        'accent-blue-light': '#60a5fa',
        'accent-blue-dark': '#2563eb',
        
        border: '#374151',
        'border-light': '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config