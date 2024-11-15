/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        "lato": ["'Lato', sans-serif"],
        "exo": ["'Exo 2', sans-serif"],
      },
      colors: {
        "primary": "#EDFEF6",
        "text": "#111827",
        "l-green": "#D1FAE5",
        "l-pink": "#FDE2E4",
        "l-yellow": "#FEF9C3",
      },

      animation: {
        blob: "blob 15s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0%, 0%) scale(1)",
          },
          "33%": {
            transform: "translate(30%, -50%) scale(1.1)",
          },
          "66%": {
            transform: "translate(-30%, 30%) scale(0.9)",
          },
          "100%": {
            transform: "translate(0%, 0%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}

