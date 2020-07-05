/* eslint-disable no-useless-catch */
import React, { Image } from 'react';
import { SVGIconsMenus } from 'assets/menu';
import { useNavigation } from '@react-navigation/native';

export const useHandleNavigation = (route: string): any => {
  const navigation = useNavigation();
  function navigateTo(): void {
    navigation.navigate(route);
  }
  return [navigateTo];
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
        const { default: namedImport } = await SVGIconsMenus[name];
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
