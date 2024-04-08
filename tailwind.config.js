/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
      colors: {
        "text-highlight": "#fbc02d",
        "text-normal": "rgba(233, 229, 246, .87)",
        boxborder: "#7976a0",
        background: {
          harder: "#1f1d33",
          primary: "#2d2a49",
          body: "#3c3963",
          soft: "#44416f",
        },
      },
    },
  },
  plugins: [],
};
