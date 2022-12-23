/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        light1: "var(--light1)",
        light2: "var(--light2)",
        dark1: "var(--dark1)",
        dark2: "var(--dark2)",
        grey: "var(--grey)",
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",
      },
    },
  },
};
