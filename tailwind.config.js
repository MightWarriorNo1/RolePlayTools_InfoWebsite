/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'discord-dark': '#2c2f33',
        'discord-darker': '#23272a',
        'discord-light': '#99aab5',
        'discord-blurple': '#5865f2',
        'discord-border': '#40444b',
        'discord-lighter': '#36393f',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(88, 101, 242, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(88, 101, 242, 0.8)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};