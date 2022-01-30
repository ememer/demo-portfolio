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
