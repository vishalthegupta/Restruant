/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      height: {
        '50': '400px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}