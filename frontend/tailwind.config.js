/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'liquid-flow': {
          '0%': { 
            backgroundPosition: '0% 50%',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
          },
          '100%': { 
            backgroundPosition: '0% 50%',
          },
        },
      },
      animation: {
        'liquid-flow': 'liquid-flow 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
