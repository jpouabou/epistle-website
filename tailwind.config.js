/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#020202",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "San Francisco",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "Georgia",
          "Cormorant Garamond",
          "Playfair Display",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

