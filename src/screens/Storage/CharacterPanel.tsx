/* eslint-disable react/no-array-index-key */
import React, { useEffect, useMemo } from 'react';
import { CardBooks, CardBooksTitle, CardBooksBody } from 'styles';
import { getRandomArray } from 'helpers';
import { PersonagenIcons } from 'assets/characters';
import { AnimaisIconsPath } from 'assets/animais';
import { CenariosIconsPath } from 'assets/cenarios';
import { PHIcon } from './PHBooksPanel';

let ButtonIcon = React.lazy(() => import('./ButtonIcon'));
interface Props {
  color?: string;
  title: string;
  pack: string;
}

const CharacterPanel: React.FC<Props> = ({ color = 'purple', title, pack }) => {
  useEffect(() => {
    return () => {
      ButtonIcon = React.lazy(() => import('./ButtonIcon'));
    };
  }, []);

  const PackIcons: PacksProps =
    {
      characters: PersonagenIcons,
      animais: AnimaisIconsPath,
      cenarios: CenariosIconsPath,
    }[pack] || [];

  const icons: { name: string; pack: string }[] = useMemo(
    () =>
      getRandomArray(
        Object.keys(PackIcons).map(key => ({ name: key, pack })),
        20,
      ),
    [],
  );

  return (
    <CardBooks color={color}>
      <CardBooksTitle color={color} size="medium">
        {title}
      </CardBooksTitle>
      <CardBooksBody>
        {icons.map((item, index: number) => (
          <React.Suspense fallback={<PHIcon />} key={`${index}_${item.name}`}>
            <ButtonIcon item={item} />
          </React.Suspense>
        ))}
      </CardBooksBody>
    </CardBooks>
  );
};

export default CharacterPanel;
