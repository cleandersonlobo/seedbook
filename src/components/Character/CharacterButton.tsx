import React from 'react';
import { ContentCharacter } from './styles';
import Character from './Character';

interface Props {
  size?: number;
  name?: string;
  btnSize: number;
  onPress?: () => void;
}
const CharacterButton: React.FC<Props> = ({
  size = 60,
  name = 'boy',
  btnSize = 88,
  ...btnProps
}) => {
  return (
    <ContentCharacter size={btnSize} {...btnProps}>
      <Character width={size} height={size} name={name} />
    </ContentCharacter>
  );
};

export default CharacterButton;
