/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mori': ['Mori', 'sans-serif'],
      },
      colors: {
        'powderblue': '#B4CDED',
        'indigodye': '#344966',
        'richblack': '#0D1821',
        'babypowder': '#F0F4EF',
        'sage': 'BFCC94',
      }
    },
  },
  plugins: [],
};
