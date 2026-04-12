/** @type {import('tailwindcss').Config} */
/* Colores de marca y paths: HTML + Flowbite (plugin). Sin utilidades responsive de font-size en el HTML. */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.css",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#052A05",
          action: "#006600",
          muted: "#f5f7f5",
          soft: "#eef4ee",
          line: "#dce6dc",
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Outfit"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      borderRadius: {
        card: "20px",
        hero: "24px",
      },
      transitionDuration: {
        DEFAULT: "220ms",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
