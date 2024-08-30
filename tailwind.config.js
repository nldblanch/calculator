/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateAreas: {
        'layout': [
          'output output',
          'utilities operations',
          'numbers  operations',
        ],
      },
      gridTemplateColumns: {
        'layout': '3fr 1fr',
      },
      gridTemplateRows: {
        'layout': `2fr 1fr 4fr`,
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas")
  ],
};
