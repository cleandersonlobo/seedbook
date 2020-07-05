declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}

interface CardButtonItem {
  name: string;
  category: any;
  svg?: Promise<typeof import('*.svg')>;
  image?: string;
}

interface PersonagenDataIcons {
  [key: string]: Promise<typeof import('*.svg')>;
}

interface ColegasProps {
  [key: string]: string;
  profilepicture: string;
  usuario: string;
}
