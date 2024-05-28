/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        blue: "#0085FFF2",
        black: "#000000",
        darkgrey: "#666666",
        lightgrey: "#CCCCCC",
        white: "#FFFFFF",
        red: "#DE4B18",
        lightblue: "#1F70B2",
        ash: "#969696",
        darkblue: "#186BAD",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      opensans: ["Open Sans"],
    },
  },
  plugins: [],
};
