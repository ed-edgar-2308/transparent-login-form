/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      "4k": { max: "3840px" },
      "1080p": { max: "1920px" },
      "720p": { max: "1280px" },
      xl: { max: "1024px" },
      lg: { max: "768px" },
      md: { max: "428px" },
      sm: { max: "375px" },
      xs: { max: "320px" },
    },
    extend: {
      colors: {
        "primary-light-hsl": "hsl(200, 100%, 91%)",
        "primary-hsl": "hsl(200, 100%, 50%)",
        "primary-dark-hsl": "hsl(200, 100%, 6%)",
        "success-hsl": "hsl(100, 60%, 50%)",
        "error-hsl": "hsl(0, 60%, 50%)",
      },
    },
  },
  plugins: [],
};
