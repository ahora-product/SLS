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
          dark: "#001600",
          /** Superficie de tarjetas oscuras (más claro que header/pie #001600). */
          cardDark: "#052a05",
          action: "#006600",
          muted: "#f5f7f5",
          soft: "#eef4ee",
          line: "#dce6dc",
          canvas: "#e8ebe6",
        },
      },
      fontFamily: {
        sans: ['"Inter Tight"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Inter Tight"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      borderRadius: {
        card: "20px",
        hero: "24px",
        section: "28px",
        /* Barra superior fija (`.section-block-header` en `src/input.css`) */
        headerBar: "24px",
      },
      transitionDuration: {
        DEFAULT: "220ms",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
