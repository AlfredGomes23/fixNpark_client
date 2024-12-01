/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        delius: ['Delius', 'cursive'],
        'twinkle-star': ["Twinkle Star", 'cursive'],
        'potta-one': ["Potta One", "system-ui"],
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
}