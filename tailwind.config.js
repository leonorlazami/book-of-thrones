/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"Marcellus SC"', 'serif'],
        'thrones': ['thrones', 'serif']
      },
      colors: {
        'primary': '#CFDBD5',
        'secondary': '#E8EDDF',
        'tertiary': '#e0e2db',
        'bg-dark': '#191716',



      },

    },
  },
  plugins: [],
}
