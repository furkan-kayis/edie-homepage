/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
        heebo: ["'Heebo', sans-serif"],
      },
      colors: {
        "custom-gray-1": "#333333",
        "custom-gray-2": "#4F4F4F",
        "custom-gray-3": "#828282",
        "custom-gray-4": "#F2F2F2",
        "custom-gray-5": "#E0E0E0",
        "custom-blue": "#2D9CDB",
        "custom-green": "#27AE60",
        "custom-red": "#EB5757",
        "custom-yellow": "#F2C94C",
      },
    },
  },
  plugins: [],
};
