/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: `var(--inter)`,
        poppins: `var(--poppins)`,
      },
      colors: {
        design: '#3532C9',
        marketing: '#32C9AE',
        development: '#B02E8C',
      },
    },
  },
  plugins: [],
};
