import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        button: "linear-gradient(180deg, #B1FF36 -23%, #1D863C 100%)",
        cardOne:
          "linear-gradient(284.05deg, #fceef0 8.66%, rgba(252, 238, 240, 0.6) 93%)",
        cardTwo: "linear-gradient(142deg, #F3F8FF 8%, #CEDBFF 99%)",
        cardThree:
          "linear-gradient(284deg, #EBD1FF 7%, rgba(244, 233, 252, 0.6) 93%)",
        stackedOne: "linear-gradient(41.25deg, #B2D6F8 25.09%, #81E0F5 94.14%)",
        stackedTwo: "linear-gradient(180deg, #B0F248 -9.62%, #6DD18A 100%)",
        stackedThree:
          "linear-gradient(24.55deg, #FF94C7 22.06%, #FFDBBA 92.53%)",
        stackedFour:
          "linear-gradient(25.41deg, #B67DFF 22.21%, #ADBFFF 91.18%)",
        testimonial:
          "linear-gradient(239.18deg, rgba(255, 255, 255, 0.16) 17.93%, rgba(255, 255, 255, 0.04) 81.51%)",
      },
      boxShadow: {
        button: "0px 2px 3px rgba(3, 22, 3, 0.2)",
        stackedCard:
          "0px 30px 30px rgba(1, 10, 10, 0.1), inset 0px 0px 0.5px rgba(255, 255, 255, 0.25)",
        icon: "0px 1px 2px rgba(1, 16, 61, 0.14)",
      },
      colors: {
        main: "#6F2BDC",
        lightPurple: "#AD8AE7",
        black: "#000229",
        grey: " #707479",
        grey2: "#F5F4F8",
        lightPink: "#FEF3F1",
        lightBlue: "#DEE8FF",
        lightIndigo: "#F3E5FD",
        input: "#D5C5EE",
      },
      padding: {
        footer: "calc(15rem + 4rem)",
      },
      margin: {
        footer: "15rem",
      },
    },
  },
  plugins: [],
};
export default config;
