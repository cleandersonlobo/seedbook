/* eslint-disable no-useless-catch */
import * as React from 'react';
import { Button, Image } from './styles';
import CardLoading from './CardLoading';

interface Props {
  item: CardButtonItem;
}

const CardButton: React.FC<Props> = ({ item }) => {
  const ImportedIconRef = React.useRef<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [selected, setSelect] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        if (item.svg) {
          const { default: namedImport } = await item.svg;
          ImportedIconRef.current = namedImport;
        }
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    if (item.svg) importIcon();
  }, []);
  const handleOnPress = React.useCallback(() => {
    setSelect(val => !val);
  }, []);

  if ((!loading && ImportedIconRef.current) || item.image) {
    return (
      <Button selected={selected} onPress={handleOnPress}>
        {item.image ? (
          <Image source={{ uri: item.image }} resizeMode="contain" />
        ) : (
          <ImportedIconRef.current />
        )}
      </Button>
    );
  }
  return <CardLoading />;
};

export default React.memo(CardButton);
