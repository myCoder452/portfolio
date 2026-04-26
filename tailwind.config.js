/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1F2937', // Dark Blue-Gray from mainLogo30_noglasses.png
        'secondary': '#4A5568', // Medium Gray from mainLogo30_noglasses.png
        'accent': '#E5E7EB', // Light Gray from mainLogo30_noglasses.png
        'highlight': '#F59E0B', // Amber from mainlogo16.jpeg
        'sky-blue': '#87CEEB', // Sky Blue from cloudysky.jpg
        'purple-hue': '#C4B5FD', // Purple from mainlogo16.jpeg
        'eggshell': '#1a202c',
        'light-blue': '#63b3ed',
        'white': '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}