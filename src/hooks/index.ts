/* eslint-disable no-useless-catch */
import React from 'react';
import { SVGIconsMenus } from 'assets/menu';

export const useMenuIconSvg = ({ name }: { name: string }): any => {
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
    importIcon();
  }, []);

  return { loading, Icon: ImportedIconRef.current };
};
