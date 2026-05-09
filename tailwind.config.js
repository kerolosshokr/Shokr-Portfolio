/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        surface: '#141414',
        card: '#1A1A1A',
        border: '#2A2A2A',
        magenta: '#FF00FF',
        violet: '#7F00FF',
        'magenta-dim': '#CC00CC',
        'violet-dim': '#6600CC',
        muted: '#888888',
        light: '#E0E0E0',
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px #FF00FF44, 0 0 60px #FF00FF22' },
          '50%': { boxShadow: '0 0 40px #FF00FF88, 0 0 100px #FF00FF44' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}
