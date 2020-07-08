declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  interface SVGOtherProps {
    fillMain?: string;
    fillShadow?: string;
    fillLight?: string;
  }
  const content: React.FC<SvgProps & SVGOtherProps>;
  export default content;
}

interface CardButtonItem {
  name: string;
  category: any;
  svg?: Promise<typeof import('*.svg')>;
  image?: string;
}

interface SVGDataIcons {
  [key: string]: Promise<typeof import('*.svg')> | undefined | any;
}
interface PacksProps {
  [key: string]: SVGDataIcons;
}
interface ColegasProps {
  [key: string]: string;
  profilepicture: string;
  usuario: string;
}

interface StyledProps {
  color?: string;
  size?: number | string;
  stroke?: number;
  customColor?: string | undefined;
  fontSize?: string | undefined;
  borderColor?: string | undefined;
}
