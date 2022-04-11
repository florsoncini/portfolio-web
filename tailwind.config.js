module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "minimalista-gray-t": "#f4f4f486",
        "light-blue": "##aaf1ff",
      },
    },
    screens: {
      sm: { max: "700px" },
      base: { min: "701px", max: "1000px" },
      lg: { min: "1001px", max: "1500px" },
      xl: { min: "1100px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
