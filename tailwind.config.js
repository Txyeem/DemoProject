/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-heavy': ['Gilroy-Heavy', 'sans-serif'],
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'poppins': ["Poppins", 'sans-serif']
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
    }, // Close extend
  },
  plugins: [],
};
