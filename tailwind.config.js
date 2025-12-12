/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scrollDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "scroll-up": "scrollUp 25s linear infinite",
        "scroll-down": "scrollDown 25s linear infinite",
      },
      colors: {
        jade: {
          500: "#0AAE6C",
        },
      },
    },
  },
  plugins: [],
};
