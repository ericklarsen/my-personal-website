/* eslint-disable prettier/prettier */

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      colors: {
        dark: {
          200: "#353535",
          500: "#434343",
        },
        maroon: "#F36666",
      },
      fontWeight: {
        "mont-black": 900,
        "mont-extra-bold": 800,
        "mont-bold": 700,
        "mont-medium": 500,
        "mont-regular": 400,
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        loading: {
          "0%": { "background-color": "#434343" },
          "50%": { "background-color": "#353535" },
          "100%": { "background-color": "#434343" },
        },
        bottomsheet: {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0)" },
        },
        "bottomsheet-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
      animation: {
        fade: "fade 350ms ease-in-out",
        "fade-out": "fade-out 550ms ease-in-out",
        loading: "loading 1s infinite",
        bottomsheet: "bottomsheet 0.55s cubic-bezier(0.85,0.01,0.25,1)",
        "bottomsheet-out": "bottomsheet-out 0.55s cubic-bezier(0.85,0.01,0.25,1)",
        "spin-slow": "spin 6s linear infinite",
      },
      width: {
        105: "26.25rem",
      },
      height: {
        content: "fit-content",
        desktop: "1024px",
      },
      maxHeight: {
        desktop: "1024px",
      },
      minHeight: {
        desktop: "1024px",
        sliderDesktop: "740px",
        sliderMobile: "472px",
      },
      padding: {
        35: "8.75rem",
      },
      zIndex: {
        100: 100,
        "-1": -1,
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
