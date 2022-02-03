const groups = require("./.eslint.tailwind-groups.js");

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "react-app",
    "plugin:tailwindcss/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort", "tailwindcss"],
  settings: {
    tailwindcss: {
      groups,
    },
  },
  rules: {
    "no-unused-vars": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // React-related imports
          ["^react$", "^prop-types$"],
          // Gatsby-related imports
          ["^gatsby$", "gatsby"],
          // other external imports
          ["^@?\\w"],
          // app's internal relative imports
          ["^../../../"],
          ["^../../"],
          ["^../"],
          ["^./"],
          // image imports
          ["^.*\\.(png|jpg)$"],
          // CSS imports
          ["^\\u0000\\S+.css$", "^\\u0000\\S+(?<!.css)$"],
        ],
      },
    ],
  },
};
