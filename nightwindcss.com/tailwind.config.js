const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",

  theme: {
    colors: {
      transparent: "transparent",
      white: colors.white,
      black: colors.black,
      gray: colors.coolGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      primary: {
        50: "#caf0f8",
        300: "#90e0ef",
        600: "#0077b6",
        900: "#03045e",
      },
    },
    extends: {
      screens: {
        xs: "450px",
      },
    },
    nightwind: {
      transitionDuration: "0ms",
      colorClasses: ["gradient", "ring", "ring-offset"], // 'divide', 'placeholder', 'ring', 'ring-offset']
      colors: {
        white: "gray.900",
        black: "gray.50",
        rose: {
          default: "blue",
          200: "yellow.300",
        },
      },
    },
  },
  purge: {
    // enabled: true,
    content: [
      "./pages/**/*.tsx",
      "./pages/**/*.js",
      "./components/**/*.tsx",
      "./components/**/*.scss",
      "./icons/**/*.tsx",
      "./icons/**/*.scss",
      "./layouts/**/*.tsx",
      "./layouts/**/*.scss",
      "./styles/**/*.scss",
      "./styles/safelist.json",
    ],
  },

  // variants: {
  //   nightwind: ["active"],
  //   // textColor: ({ after }) => after(["group-hover"]),
  //   // ringOpacity: ({ after }) => after(["hover"]),
  //   // rotate: ["group-hover"],
  // },

  plugins: [require("nightwind")],
}
