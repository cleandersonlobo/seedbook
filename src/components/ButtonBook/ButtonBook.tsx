import React from 'react';
import { Button, Image } from './styles';

interface Props {
  uri: string;
}
const ButtonBook: React.FC<Props> = ({ uri, ...restProps }) => {
  return (
    <Button {...restProps}>
      <Image source={{ uri }} resizeMode="contain" />
    </Button>
  );
};

export default ButtonBook;
