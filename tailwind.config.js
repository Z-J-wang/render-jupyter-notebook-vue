/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  darkMode: 'selector',
  content: ['./public/index.htmll', './src/**/*.{vue,js,ts,jsx,tsx}'], // tailwind CSS 生效路劲
  theme: {
    extend: {}
  },
  plugins: []
};
