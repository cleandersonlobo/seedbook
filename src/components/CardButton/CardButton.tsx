/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-catch */
import * as React from 'react';
import { Button, Image } from './styles';
import CardLoading from './CardLoading';

interface Props {
  item: CardButtonItem;
  onSelectedCard: (item: CardButtonItem, isSelectd: boolean) => void;
}

const CardButton: React.FC<Props> = ({ item, onSelectedCard }) => {
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
    setSelect(val => {
      onSelectedCard(item, !val);
      return !val;
    });
  }, [onSelectedCard]);

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
