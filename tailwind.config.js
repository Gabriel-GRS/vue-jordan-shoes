/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jordan-banner': "url('./public/jordan-banner.png')"
      }
    },
  },
  plugins: [],
}

