module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "Default/me/head": "#111821",
        "Default/me/back": "#111821",
        "Default/me/Gris": "#2d2d2d",
      },
      "fontSize": {
        "base": "1rem",
        "lg": "1.25rem",
        "xl": "1.5625rem",
        "2xl": "1.875rem",
        "3xl": "3.1875rem",
        "4xl": "5rem"
      },
      "fontFamily": {
        "Iceberg": "Iceberg",
        "poppins": "Poppins",
      },
      "boxShadow": {

      },
      "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "1.25rem",
        "default": "1.875rem",
        "lg": "2rem",
        "xl": "2.1875rem",
        "full": "9999px"
      }
    },
  },
  plugins: [],
}
