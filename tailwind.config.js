// Tailwind CSS Configuration

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 992px) { ... }
      },
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
      height: {
        '7/25': '28%',
        '3/10': '30%',
        '9/20': '45%',
        '15/31': '48.3870968%',
        '11/20': '55%',
        '6/10': '60%',
        '6/7': '85.7142857%',
        '7/8': '87.5%',
        '9/10': '90%',
        '19/20': '95%',
      },
      width: {
        '1/16': '6.25%',
        '1/14': '7.14%',
        '1/10': '10%',
        '3/10': '30%',
        '12/25': '48%',
        '9/20': '45%',
        '6/10': '60%',
        '13/20': '65%',
        '7/10': '70%',
        '6/7': '85.7142857%',
        '7/8': '87.5%',
        '8/9': '88.8888889%',
        '9/10': '90%',
        '19/20': '95%',
      },
    },
  },
};