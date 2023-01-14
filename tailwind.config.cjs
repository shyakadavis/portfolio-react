/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        europa: ['europa', 'sans-serif']
      },
      colors: {
        primary: '#051937',
        secondary: '#a8eb12',
        tertiary: '#00ffff',
        complementary: '#f9f871',
        matte: '#020917',
        gradient: 'linear-gradient(180deg, #020917 0%, #1e3a8a 100%)'
      }
    }
  },
  plugins: []
}
