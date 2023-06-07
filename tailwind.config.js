/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandingBlue: {
          400: "#005397",
          300: "#3695e2",
        },
        brandingGreen: {
          400: "#69b338",
        },
        brandingGrey: {
          700: "#202020",
        },
      },
      screens: {
        max: "2400px",
      },
    },
  },
  plugins: [],
};
