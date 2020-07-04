import React from 'react';
import { TouchOpacity, Text } from './styles';

interface Props {
  text?: string;
  color?: string;
  textColor?: string;
}

const Button: React.FC<Props> = ({
  text = 'Entrar',
  textColor = 'dark',
  ...btnProps
}) => {
  return (
    <TouchOpacity {...btnProps}>
      <Text color={textColor}>{text}</Text>
    </TouchOpacity>
  );
};

export default Button;
