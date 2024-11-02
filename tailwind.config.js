/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:
      {
        "custom":"12px",
        "custom2":"16px"
      },
      width:
      {
        "custom":"90%"
      },
      screens: {
        'custom': '1260px',
      },
    },
  },
  plugins: [],
}

