import 'styled-components/native';
// and extend them!

interface ColorTypes {
  [key: string]: string | number | undefined;
  main?: string;
  dark?: string;
  light: string;
  shadow?: string;
}
interface DefaultTheme {
  type: string;
  colors: {
    [key: string]: ColorTypes | string;
    green: ColorTypes;
    yellow: ColorTypes;
    red: ColorTypes;
    blue: ColorTypes;
    purple: ColorTypes;
    black: string;
    white: string;
    background: string;
    text: ColorTypes;
  };
  spacing: {
    [key: string]: number;
    tiny: number;
    small: number;
    medium: number;
    large: number;
  };
  fontSize: {
    [key: string]: number;
    large: number;
    medium: number;
    small: number;
    tiny: number;
  };
}
declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    colors: {
      [key: string]: ColorTypes | string;
      green: ColorTypes;
      yellow: ColorTypes;
      red: ColorTypes;
      blue: ColorTypes;
      purple: ColorTypes;
      black: string;
      white: string;
      background: string;
      text: ColorTypes;
    };
    spacing: {
      [key: string]: string | number;
      tiny: number;
      small: number;
      medium: number;
      large: number;
    };
    fontSize: {
      [key: string]: string | number;
      large: number;
      medium: number;
      small: number;
      tiny: number;
    };
  }
}
