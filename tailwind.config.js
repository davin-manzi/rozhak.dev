/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0a192f',
          text: '#ccd6f6'
        },
        secondary: {
          bg: '#172a45',
          text: '#8892b0'
        },
        accent: '#64ffda'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}
