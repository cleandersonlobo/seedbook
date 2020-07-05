/* eslint-disable no-useless-catch */
import React from 'react';
import { PersonagenIcons } from 'assets/characters';

interface Props {
  name: string;
  width?: number;
  height?: number;
}
const Character: React.FC<Props> = ({ name, ...resrProps }) => {
  const ImportedIconRef = React.useRef<any>(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        const { default: namedImport } = await PersonagenIcons[name];
        ImportedIconRef.current = namedImport;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, []);

  if (!loading && ImportedIconRef.current) {
    return <ImportedIconRef.current {...resrProps} />;
  }
  return null;
};

export default Character;
