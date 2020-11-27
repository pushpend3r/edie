module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  important: true,
  purge: ['./src/**/*.html',
          './src/**/*.vue',
          './src/**/*.jsx',],
  theme: {
    fontFamily: {
      sans: ["Poppins", "san-serif"],
    },
    extend: {
      colors: {
        brand: "#2D9CDB",
        primary: "#333333",
        secondary: "#4F4F4F",
        light: "#828282",
      },
    },
    borderRadius: {
      large: "24px",
    },
  },
  variants: {
    margin: ["odd", "responsive", "hover", "focus"],
    color: ["responsize", "focus", "hover"],
  },
  plugins: [],
};
