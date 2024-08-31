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
        button: "linear-gradient(90deg, #3AC52D 0%, #2FBF21 100%)",
      },
      boxShadow: {
        button: "0px 4px 8px rgba(0, 0, 0, 0.15)",
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
        footer: "calc(15rem + 2rem)",
      },
      margin: {
        footer: "15rem",
      },
    },
  },
  plugins: [],
};
export default config;
