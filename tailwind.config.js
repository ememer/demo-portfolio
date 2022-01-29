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
    },
  },
  plugins: [],
};
