// import original module declarations
import { DefaultTheme } from 'styled-components/native';

const spacing = {
  large: 30,
  medium: 20,
  small: 15,
  tiny: 10,
};

const fontSize = {
  xlarge: 36,
  large: 24,
  medium: 18,
  small: 14,
  tiny: 12,
  xtiny: 10,
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
