/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFFFF",
          200: "#4BD355",
          300: "#20A7269C",
          400: "#1EA428",
        },
        secondary: {
          100: "#E4E4E4",
          200: "#A7A7A7",
          300: "#585454",
          400: "#003334",
        },
      },
      fontFamily: {
        nunito: ["Nunito-Regular"],
        "nunito-bold": ["Nunito-Bold"],
        "nunito-extra-bold": ["Nunito-ExtraBold"],
        "nunito-semi-bold": ["Nunito-SemiBold"],
        "nunito-light": ["Nunito-Light"],
      },
    },
  },
  plugins: [],
};
