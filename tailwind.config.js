/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primery: "#7269ef",
        secondary: "#f7f7ff",
        activeBg: "#e6ebf5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
