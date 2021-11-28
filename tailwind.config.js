/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          twitter: {
            DEFAULT: "#1DA1F2",
            dark: "#0d8ddb",
          },
        },
      },
    },
  },
  variants: {
    borderColor: ({ after }) => after(["invalid"]),
    extend: {
      backgroundColor: ["odd", "even"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addVariant, e }) {
      addVariant("invalid", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`invalid${separator}${className}`)}:invalid`;
        });
      });
    }),
  ],
};
