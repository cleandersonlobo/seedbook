/* eslint-disable no-useless-catch */
import React from 'react';
import { Image } from 'react-native';
import { SVGIconsMenus } from 'assets/menu';
import { PersonagenIcons } from 'assets/characters';
import { AnimaisIconsPath } from 'assets/animais';
import { CenariosIconsPath } from 'assets/cenarios';
import { useNavigation } from '@react-navigation/native';

export const useHandleNavigation = (route: string): any => {
  const navigation = useNavigation();
  function navigateTo(): void {
    navigation.navigate(route);
  }
  return [navigateTo];
};

export const useIconSvg = ({
  name,
  pack = 'characters',
}: {
  name: string;
  pack?: string;
}): { loading: boolean; Icon: React.FC<{ width: number; height: number }> } => {
  const ImportedIconRef = React.useRef<any>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        const PackIcons: PacksProps = {
          characters: PersonagenIcons,
          animais: AnimaisIconsPath,
          cenarios: CenariosIconsPath,
        }[pack];

        const { default: namedImport } = await PackIcons[name];
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, []);

  return { loading, Icon: ImportedIconRef.current };
};

export const useMenuIconSvg = ({
  name,
  type = 'svg',
}: {
  name: string;
  type?: string;
}): any => {
  const ImportedIconRef = React.useRef<any>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        const { default: namedImport } =
          (await SVGIconsMenus[name]) || PersonagenIcons[name];
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    if (type === 'svg') importIcon();
    else ImportedIconRef.current = Image;
  }, []);

  return { loading, Icon: ImportedIconRef.current };
};
