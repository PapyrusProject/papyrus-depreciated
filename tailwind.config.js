/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      'xsm': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1500px',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    },
    colors: {
      'black': "#000000",
      'primary': "#068FFF",
      'white': "#EEEEEE",
      'secondary': "#4E4FEB",
      'gray': "#D9D9D9",
    },
    extend: {},
  },
  plugins: [],
};
