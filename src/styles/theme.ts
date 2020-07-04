// import original module declarations
import { DefaultTheme } from 'styled-components/native';

const spacing = {
  large: 30,
  medium: 20,
  small: 15,
  tiny: 10,
};

export const light: DefaultTheme = {
  type: 'light',
  colors: {
    primary: '#73D676',
    lightPrimary: '#CFDFBF',
    secondary: '#ffcf32',
    lightSecondary: '#fde6d1',
    red: '#f59377',
    lightRed: '#fedbd0',
    blue: '#3AAFFF',
    lightBlue: '#DBEEFC',
    purple: '#A55FEE',
    lightPurple: '#EDE0F9',
    black: '#000000',
    white: '#ffffff',
    background: '#f5f5f5',
    text: '#333',
  },
  spacing,
};

export const dark: DefaultTheme = {
  type: 'dark',
  colors: {
    primary: '#73D676',
    lightPrimary: '#CFDFBF',
    secondary: '#ffcf32',
    lightSecondary: '#fde6d1',
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
};
