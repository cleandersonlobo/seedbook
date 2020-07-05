import React from 'react';
import { Button, Image } from './styles';

interface Props {
  uri: string;
}
const ButtonBook: React.FC<Props> = ({ uri }) => {
  return (
    <Button>
      <Image source={{ uri }} resizeMode="contain" />
    </Button>
  );
};

export default ButtonBook;
