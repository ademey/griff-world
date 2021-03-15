import { grommet } from "grommet/themes"
import { deepMerge } from "grommet/utils"

/**
 * Extension of Grommet theme base
 * @see https://github.com/grommet/grommet/blob/master/src/js/themes/base.js
 * font-family: 'Bebas Neue', cursive;
font-family: 'Roboto', sans-serif;
 */

export const themeOverrides = {
  global: {
    colors: {
      // brand: "#1B337A",
      // black: "#000",
      // white: "#fff",
      // "accent-1": "#db3a00",
      // "accent-2": "#00c9f8",
      // "accent-3": "#061331",
      // "dark-1": "#666666",
      // "light-1": "#CCCCCC",
      // text: {
      //   dark: "#fff",
      //   light: "#000",
      // },
      // "background-contrast": {
      //   light: "#000",
      // },
    },
    font: {
      family: "'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif",
      size: "18px",
    },
  },
  anchor: {
    fontWeight: "normal",
  },
  heading: {
    font: {
      family: "'Bebas Neue', Helvetica Neue, Helvetica, Arial, sans-serif",
    },
    extend: () => ({
      textTransform: "uppercase",
    }),
  },
  accordion: {
    border: undefined,
  },
  button: {
    size: {
      small: {
        border: {
          radius: 0,
        },
      },
    },
    border: {
      radius: 0,
    },
  },
  paragraph: {
    fill: true,
  },
}

const theme = deepMerge(grommet, themeOverrides)

export default theme
