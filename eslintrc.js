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
"prettier/prettier": [
  "error",
  {
    endOfLine: "auto",
  },
],
},
};