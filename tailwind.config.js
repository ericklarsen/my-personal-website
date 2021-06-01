const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      colors: {
        dark: {
          200: "#353535",
          500: "#434343",
        },
      },
      fontFamily: {
        "mont-black": ["Montserrat-Black"],
        "mont-bold": ["Montserrat-Bold"],
        "mont-medium": ["Montserrat-Medium"],
        "mont-regular": ["Montserrat-Regular"],
      },
    },
  },
  variants: {
    extend: {
      margin: ["last"],
      rotate: ["last"],
    },
  },
  plugins: [],
};
