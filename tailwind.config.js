/* eslint-disable prettier/prettier */

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
          "200": "#353535",
          "500": "#434343",
        },
        "maroon" : "#F36666"
      },
      fontFamily: {
        "mont-black": ["Montserrat-Black"],
        "mont-bold": ["Montserrat-Bold"],
        "mont-extra-bold": ["Montserrat-ExtraBold"],
        "mont-medium": ["Montserrat-Medium"],
        "mont-regular": ["Montserrat-Regular"],
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        loading: {
          "0%": { 'background-color' : '#434343' },
          "50%": { 'background-color' : '#353535' },
          "100%": { 'background-color' : '#434343' },
        },
        bottomsheet: {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fade: "fade 350ms ease-in-out",
        loading: "loading 1s infinite",
        bottomsheet: "bottomsheet 0.55s cubic-bezier(0.85,0.01,0.25,1)",
        'spin-slow': 'spin 6s linear infinite',
      },
      width: {
        "105": "26.25rem",
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
        "35": "8.75rem",
      },
      zIndex : {
        '100' : 100,
        '-1' : -1,
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
