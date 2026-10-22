/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          blush: '#FFF0F5',
          blushPink: '#FCE7F3',
          roseSoft: '#F472B6',
          rose: '#E11D48',
          roseDeep: '#BE123C',
          roseDark: '#881337',
          lavenderSoft: '#FAF5FF',
          lavender: '#E9D5FF',
          lavenderDeep: '#C084FC',
          cream: '#FFFDF9',
          creamGold: '#FEF3C7',
          gold: '#F59E0B',
          goldWarm: '#D97706',
          midnight: '#0B0A1A',
          nightSky: '#120E24',
          nightViolet: '#1E1233'
        }
      },
      fontFamily: {
        cursive: ['"Great Vibes"', 'cursive'],
        script: ['"Dancing Script"', 'cursive'],
        serifRomantic: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(225, 29, 72, 0.25)',
        'glow': '0 0 25px rgba(225, 29, 72, 0.35)',
        'glow-lg': '0 0 40px rgba(225, 29, 72, 0.45)',
        'glow-gold': '0 0 30px rgba(245, 158, 11, 0.35)',
        'glow-lavender': '0 0 30px rgba(192, 132, 252, 0.35)',
        'glass': '0 8px 32px 0 rgba(190, 18, 60, 0.15)',
        'glass-hover': '0 12px 40px 0 rgba(190, 18, 60, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.7)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' },
        }
      }
    },
  },
  plugins: [],
}
