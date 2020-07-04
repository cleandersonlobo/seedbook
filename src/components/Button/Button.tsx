import React from 'react';
import { TouchOpacity, Text } from './styles';

interface Props {
  text?: string;
  color?: string;
  textColor?: string;
  textSize?: string;
  spacing?: string;
  size?: string;
}

const Button: React.FC<Props> = ({
  text = 'Entrar',
  textColor = 'dark',
  textSize = 'large',
  ...btnProps
}) => {
  return (
    <TouchOpacity {...btnProps}>
      <Text color={textColor} textSize={textSize}>
        {text}
      </Text>
    </TouchOpacity>
  );
};

export default Button;
