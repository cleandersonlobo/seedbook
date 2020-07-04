import 'styled-components/native';
// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    colors: {
      primary: string;
      lightPrimary: string;
      secondary: string;
      lightSecondary: string;
      red: string;
      lightRed: string;
      blue: string;
      lightBlue: string;
      purple: string;
      lightPurple: string;
      black: string;
      white: string;
      background: string;
      text: string;
    };
    spacing?: {
      tiny: number;
      small: number;
      medium: number;
      large: number;
    };
  }
}
