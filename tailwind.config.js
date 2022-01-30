const tailwindTheme = require("tailwindcss/defaultTheme");

const screenPercentages = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const createMinMaxSpacing = (screenUnit) => ({
  ...tailwindTheme.spacing,
  ...screenPercentages.reduce(
    (acc, percentage) => ({
      ...acc,
      [`${percentage}-screen`]: `${percentage}${screenUnit}`,
    }),
    {}
  ),
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: createMinMaxSpacing("vh"),
      maxWidth: createMinMaxSpacing("vw"),
      minHeight: createMinMaxSpacing("vh"),
      minWidth: createMinMaxSpacing("vw"),
      keyframes: {
        slideUp: {
          "100%": {
            top: "10%",
            right: "25%",
          },
        },
        slideUpRight: {
          "100%": {
            top: "2%",
            right: "35%",
          },
        },
        slideRight: {
          "100%": {
            top: "0%",
            right: "5%",
          },
        },
        mobileSlideRight: {
          "100%": {
            top: "-7%",
            right: "-10%",
          },
        },
        mobileSlideDownLeft: {
          "100%": {
            top: "10%",
            right: "7%",
          },
        },
        mobileSlideLeft: {
          "100%": {
            top: "-10%",
            right: "10%",
          },
        },
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out forwards",
        slideUpRight: "slideUpRight 1s ease-in-out forwards",
        slideRight: "slideRight 1s ease-in-out forwards",
        mobileSlideRight: "mobileSlideRight 1s ease-in-out forwards",
        mobileSlideDownLeft: "mobileSlideDownLeft 2s ease-in-out forwards",
        mobileSlideLeft: "mobileSlideLeft 2s ease-in-out forwards",
      },
      colors: {
        mainDark: {
          DEFAULT: "#1A1A40",
          50: "#5757BB",
          100: "#4949B4",
          200: "#3D3D97",
          300: "#32327A",
          400: "#26265D",
          500: "#1A1A40",
          600: "#11112A",
          700: "#0C0C1D",
          800: "#0A0A19",
          900: "#090916",
        },
      },
    },
  },
  plugins: [],
};
