import React from 'react';
import { useIconSvg } from 'hooks';
import { ButtonContent } from './styles';

interface Props {
  item: {
    name: string;
    pack: string;
  };
}
const ButtonIcon: React.FC<Props> = ({ item }) => {
  const { name, pack } = item;
  const { Icon } = useIconSvg({ name, pack });
  return (
    <ButtonContent>{Icon && <Icon width={60} height={50} />}</ButtonContent>
  );
};

export default ButtonIcon;
