/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#E2E2E2",
        "gray-50": "#E9EEF3",
        "gray-100": "#D3DCE6",
        "gray-500": "#3B3F58",
        "primary-100": "#D1FAE5",   // soft mint green
        "primary-300": "#6EE7B7",   // light green
        "primary-500": "#10B981",   // emerald
        "secondary-400": "#BFDBFE", // light blue
        "secondary-500": "#3B82F6", // blue
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #6EE7B7 0%, #3B82F6 100%)", // replaced red-yellow with green-blue
        "mobile-home": "url('./assets/NewHomeGraphic.png')", // rename your asset accordingly
      }),
      fontFamily: {
        dmsans: ["Inter", "sans-serif"],        // replacing font but keeping name
        montserrat: ["Roboto", "sans-serif"],   // same here
      },
      content: {
        evolvetext: "url('./assets/NewEvolveText.png')",
        abstractwaves: "url('./assets/NewAbstractWaves.png')",
        sparkles: "url('./assets/NewSparkles.png')",
        circles: "url('./assets/NewCircles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
