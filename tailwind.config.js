/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
      fontFamily: {
        inter: `var(--inter)`,
        poppins: `var(--poppins)`,
      },
      colors: {
        design: '#3532C9',
        marketing: '#32C9AE',
        development: '#B02E8C',
        purple: '#4e53b7',
        blue: '#3A73FB',
        textBlack: '#121212',
      },
    },
  },
  plugins: [],
};
