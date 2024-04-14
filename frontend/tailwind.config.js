/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Inter", "sans-serif"],
        serif: ["Inter", "sans-serif"],
        'inter-sans': ["Inter", "sans-serif"],
        'dmsans': ["DM Sans", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
        'roboto': ["Roboto", "sans-serif"],
        'jakarta-sans': ['Plus Jakarta Sans', "sans-serif"]
      },

    },
  },
  plugins: [],
};
