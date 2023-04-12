/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "_gray-100": "#F3F3F3",
        "_gray-200": "#E5E5E5",
        "_gray-300": "#7D7D7D",
      },
      fontFamily: {
        serif: ["var(--font-libre-baskerville)", "serif"],
      },
      fontSize: {
        display: "200px",
        "heading-1": "56px",
        "heading-2": "24px",
        "heading-3": "18px",
        "subhead-1": "15px",
        "subhead-2": "13px",
        "link-1": "12px",
        "link-2": "9px",
        body: "14px",
      },
      letterSpacing: {
        "link-1": "2.5px",
        "link-2": "2px",
      },
      lineHeight: {
        display: "150px",
        "heading-1": "64px",
        "heading-2": "29px",
        "heading-3": "22px",
        "subhead-1": "19px",
        "subhead-2": "17px",
        "link-1": "15px",
        "link-2": "11px",
        body: "28px",
      },
    },
  },
  plugins: [],
};
