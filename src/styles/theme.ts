// import original module declarations
import { DefaultTheme } from 'styled-components/native';

const spacing = {
  large: 30,
  medium: 20,
  small: 15,
  tiny: 10,
};

const fontSize = {
  large: 24,
  medium: 18,
  small: 14,
  tiny: 12,
};

export const light: DefaultTheme = {
  type: 'light',
  colors: {
    green: {
      main: '#73D676',
      light: '#CFDFBF',
      shadow: '#61ba64',
    },
    yellow: {
      main: '#ffcf32',
      light: '#fde6d1',
      shadow: '#DCB32D',
    },
    red: {
      main: '#f59377',
      light: '#fedbd0',
    },
    blue: {
      main: '#3AAFFF',
      light: '#DBEEFC',
      shadow: '#188DDD',
    },
    purple: {
      main: '#A55FEE',
      light: '#EDE0F9',
      shadow: '#8B748E',
    },
    black: '#000000',
    white: '#ffffff',
    background: '#f5f5f5',
    text: {
      dark: '#333',
      light: '#ffffff',
    },
  },
  spacing,
  fontSize,
};

export const dark: DefaultTheme = {
  type: 'dark',
  colors: {
    green: '#73D676',
    lightGreen: '#CFDFBF',
    yellow: '#ffcf32',
    lightYellow: '#fde6d1',
    red: '#f59377',
    lightRed: '#fedbd0',
    blue: '#3AAFFF',
    lightBlue: '#DBEEFC',
    purple: '#A55FEE',
    lightPurple: '#EDE0F9',
    black: '#000000',
    white: '#ffffff',
    background: '#333',
    text: '#f5f5f5',
  },
  spacing,
  fontSize,
};
