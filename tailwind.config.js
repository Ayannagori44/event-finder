/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primary2: "var(--primary2)",
        secondary: "var(--secondary)",
        "bg-color": "var(--bg-color)",
        light1: "var(--light1)",
        light2: "var(--light2)",
        light3: "var(--light3)",
        dark1: "var(--dark1)",
        dark2: "var(--dark2)",
        grey: "var(--grey)",
        grey2: "var(--grey2)",
      },
      screens: {
        sm: "600px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",
      },
      plugins: [require("daisyui")],
    },
  },
};
