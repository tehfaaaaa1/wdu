/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5EB54D",
        secondary: "#027DC0",
        "ijo-terang": "#6FD358",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      spacing: {
        330: "21.875rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
