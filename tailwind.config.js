/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // animation: {
      //   "spin-slow": "spin 3s linear infinite",
      // },
      // keyframes: {
      //   wiggle: {
      //     "0%, 100%": { transform: "rotate(-3deg)" },
      //     "50%": { transform: "rotate(3deg)" },
      //   },
      // },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate",
      },
    },
  },
  plugins: [],
};
