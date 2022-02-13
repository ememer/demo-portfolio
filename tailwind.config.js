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
        menu: {
          "100%": {
            left: "0%",
            width: "70%",
          },
        },

        //BOX3//

        slideUp: {
          "0%": {
            top: "12%",
            right: "10%",
          },
          "100%": {
            top: "10%",
            right: "25%",
          },
        },

        shuffleCardUp: {
          "0%": {
            top: "10%",
            right: "25%",
          },
          "50%": {
            top: "50%",
          },
          "100%": {
            top: "12%",
            right: "10%",
            zIndex: "30",
          },
        },

        //MOBILE//

        mobileSlideRight: {
          "100%": {
            top: "-8%",
            right: "-13%",
          },
        },

        mobileShuffleCardRight: {
          "0%": {
            top: "-8%",
            right: "-13%",
          },
          "50%": {
            top: "-60%",
            right: "-25%",
          },
          "100%": {
            top: "5%",
            zIndex: "30",
          },
        },

        //BOX2//

        slideUpRight: {
          "0%": {
            top: "12%",
            right: "10%",
          },
          "100%": {
            top: "2%",
            right: "35%",
          },
        },

        shuffleCardUpRight: {
          "0%": {
            top: "2%",
            right: "35%",
          },
          "50%": {
            top: "50%",
          },
          "100%": {
            top: "12%",
            right: "10%",
            zIndex: "30",
          },
        },

        //MOBILE//

        mobileSlideDownLeft: {
          "100%": {
            top: "10%",
            right: "7%",
          },
        },

        mobileShuffleCardDownLeft: {
          "0%": {
            top: "10%",
            right: "7%",
          },
          "50%": {
            top: "50%",
          },
          "100%": {
            top: "5%",
            zIndex: "30",
          },
        },

        //BOX1//

        slideRight: {
          "0%": {
            top: "12%",
            right: "10%",
          },
          "100%": {
            top: "0%",
            right: "5%",
          },
        },

        shuffleCardSlideRight: {
          "0%": {
            top: "0%",
            right: "5%",
          },
          "50%": {
            right: "-10%",
            top: "-20%",
          },
          "100%": {
            top: "12%",
            right: "10%",
            zIndex: "30",
          },
        },

        //MOBILE//

        mobileSlideLeft: {
          "100%": {
            top: "-15%",
            right: "12%",
          },
        },

        mobileShuffleCardLeft: {
          "0%": {
            top: "-15%",
            right: "12%",
          },
          "50%": {
            top: "-60%",
            right: "15%",
          },
          "100%": {
            top: "5%",
            zIndex: "30",
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
        menu: "menu 0.1s ease-out forwards",
        shuffleCardUp: "shuffleCardUp 1.5s ease-out forwards",
        shuffleCardUpRight: "shuffleCardUpRight 1.5s ease-out forwards",
        shuffleCardSlideRight: "shuffleCardSlideRight 1.5s ease-out forwards",
        mobileShuffleCardRight:
          "mobileShuffleCardRight 2s ease-in-out forwards",
        mobileShuffleCardDownLeft:
          "mobileShuffleCardDownLeft 2s ease-in-out forwards",
        mobileShuffleCardLeft:
          "mobileShuffleCardLeft 1.5s ease-in-out forwards",
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
        photoShopBG: {
          DEFAULT: "#0cafe0",
        },
        illustratorBG: {
          DEFAULT: "#b65e19",
        },
        xdBG: {
          DEFAULT: "#da2286",
        },
        paintBG: {
          DEFAULT: "#086972",
        },
      },
    },
  },
  plugins: [],
};
