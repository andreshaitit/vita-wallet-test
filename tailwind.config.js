/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        vwBlack: "#010E11",
        vwGrey1: "#B9C1C2",
        vwGrey2: "#DEE0E0",
        vwGrey3: "#F5F6F6",
        vwWhite: "#F9F9FA",
        vwBlue1: "#167287",
        vwBlue2: "#05BCB9",
        vwRed: "#CE3434",
      },
      backgroundImage: {
        vwBlueGradient: "linear-gradient(90deg, #05BCB9 0%, #167287 100%)",
      },
    },
  },
  plugins: [],
}
