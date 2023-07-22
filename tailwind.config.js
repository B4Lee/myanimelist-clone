/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // prefix: 'tw-',
  // important: '.tailwind',
  // FIX CONFLICTING CSS WITH TAILWIND CLASSES
  //https://dev.to/fabiobiondi/react-antd-and-tailwind-fix-css-conflicts-5542
  // corePlugins: {
  //   preflight: false // <== disable this!
  // },
}

