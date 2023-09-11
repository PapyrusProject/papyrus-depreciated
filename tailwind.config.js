/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    colors: {
      'black': "#000000",
      'primary': "#068FFF",
      'white': "#EEEEEE",
      'secondary': "#4E4FEB",
    },
    extend: {},
  },
  plugins: [],
};
