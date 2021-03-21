import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

/**
 * Extension of Grommet theme base
 * @see https://github.com/grommet/grommet/blob/master/src/js/themes/base.js
 * font-family: 'Bebas Neue', cursive;
font-family: 'Roboto', sans-serif;
 */

const statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};

const normalColors = {
  black: '#212121',
  red: '#c30771',
  green: '#10a778',
  yellow: '#a89c14',
  blue: '#008ec4',
  magenta: '#523c79',
  cyan: '#20a5ba',
  white: '#f1f1f1',
};

const brightColors = {
  black: '#212121',
  red: '#fb007a',
  green: '#5fd7af',
  yellow: '#f3e430',
  blue: '#20bbfc',
  magenta: '#6855de',
  cyan: '#4fb8cc',
  white: '#fff',
};

const darkColors = [
  '#333333',
  '#555555',
  '#777777',
  '#999999',
  '#999999',
  '#999999',
];
const lightColors = [
  '#F8F8F8',
  '#F2F2F2',
  '#EDEDED',
  '#DADADA',
  '#DADADA',
  '#DADADA',
];

export const themeOverrides = {
  global: {
    colors: {
      ...brightColors,
      brand: 'green',
      'accent-1': 'cyan',
      'accent-2': 'magenta',
      'accent-3': 'yellow',
      'accent-4': 'red',
      'neutral-1': normalColors.cyan,
      'neutral-2': normalColors.magenta,
      'neutral-3': normalColors.yellow,
      'neutral-4': normalColors.red,

      'status-critical': 'red',
      'status-error': 'red',
      'status-warning': 'yellow',
      'status-ok': 'green',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'background-back': {
        dark: '#33333308',
        light: '#EDEDED',
      },
      'background-front': {
        dark: '#444444',
        light: '#FFFFFF',
      },
      'background-contrast': {
        light: '#33333310',
        dark: '#FFFFFF18',
      },
      background: {
        light: '#f1f1f1',
        dark: '#424242',
      },
    },
    font: {
      family: "'Ubuntu Mono', monospace",
    },
  },
  anchor: {
    fontWeight: 'normal',
  },
  heading: {
    font: {
      family: "'Ubuntu Mono', monospace",
    },
    extend: () => ({
      textTransform: 'uppercase',
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
      medium: {
        border: {
          radius: 0,
        },
      },
      large: {
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
};

const theme = deepMerge(grommet, themeOverrides);

export default theme;
