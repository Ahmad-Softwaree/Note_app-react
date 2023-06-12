/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "font-family: 'Poppins', sans-serif;",
      },
      colors: {
        white: "#ffffff",
        gray: "#f2f2f2",
        blue: "#4558ff",
        yellow: "#FFE569",
        black: "#222222",
      },
    },
  },
  plugins: [],
};
