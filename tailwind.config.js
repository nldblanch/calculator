/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "10px",
      sm: '14px',
      base: '18px',
      xl: '32px',
      '2xl': '3rem',
      '3xl': '4rem',
      '4xl': '4.5rem',
      '5xl': '5rem',
      '6xl': '6rem',
      '7xl': "8rem"
    },
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
      },
      gridTemplateAreas: {
        'layout': [
          'output output',
          'utilities operations',
          'numbers operations'
        ],
      },
      gridTemplateColumns: {
        'layout': '6fr 2fr',
      },
      gridTemplateRows: {
        'layout': `5fr 2fr 8fr`,
      },
    },
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas")
  ],
};
