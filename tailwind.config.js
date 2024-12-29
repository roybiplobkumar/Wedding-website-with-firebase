/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      zIndex: {
        '-10': '-10',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        'grid-overlay':
          'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255, 255, 255, 0.05) 50px), repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255, 255, 255, 0.05) 50px)',
      },
    },
  },
  plugins: [require("daisyui")],
}

