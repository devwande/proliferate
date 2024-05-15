/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "450px",
      "2sm" : "530px",
      "md" : "600px",
      "lg" : "768px",
      "2lg" : " 900px",
      "xl" : "1024px",
      "2xl" : "1200px",
      "3xl" : "1280px",
      "4xl" : "1440px"
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
        
      }
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      opensans: ["Open Sans"]
    },
  },
  plugins: [],
}

